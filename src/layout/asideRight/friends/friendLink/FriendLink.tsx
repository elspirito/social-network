import React from 'react';
import styled from 'styled-components';
import {Avatar} from '../../../../components/avatar/Avatar';
import avatar_0004 from '../../../../img/avatars/avatar_0004.webp'
import {Icon} from '../../../../components/icon/Icon';

export const FriendLink = () => {
    return (
        <StyledFriendLink>
            <Avatar src={avatar_0004}><Status/></Avatar>
            <FullName>
                <UserName>firstName LastName</UserName>
                <LoginName>@petrushka</LoginName>
            </FullName>
            <ChatLink><Icon iconId={'tempLogo'}/></ChatLink>
        </StyledFriendLink>
    );
};

const StyledFriendLink = styled.a`
  display: flex;
  gap: 8px;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  
  &:hover {
    background-color: #eee;
  }
`
const Status = styled.div``
const FullName = styled.div`

`
const UserName = styled.p`

`
const LoginName = styled.small`
color: #ccc;
`
const ChatLink = styled.a`

`