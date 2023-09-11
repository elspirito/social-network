import React from 'react';
import styled from 'styled-components';
import {UserPic} from '../../../../components/userPic/UserPic';
import avatar_0004 from '../../../../img/avatars/avatar_0004.webp'
import {Icon} from '../../../../components/icon/Icon';

type FriendLinkPropsType = {
    isOnline: boolean
}

export const FriendLink: React.FC<FriendLinkPropsType> = (props) => {
    return (
        <StyledFriendLink>
            <FriendUserPic>
                <Badge isOnline={props.isOnline}/>
                <UserPic src={avatar_0004}/>
            </FriendUserPic>
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #eee;
  }
`
const FriendUserPic = styled.div`
  position: relative;
  flex-shrink: 0;
`
const Badge = styled.div<FriendLinkPropsType>`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  padding: 4px;
  outline: 4px solid #fff;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? 'green' : 'lightgrey'};
`
const FullName = styled.div`
    width: 100%;
`
const UserName = styled.p`

`
const LoginName = styled.small`
color: #ccc;
`
const ChatLink = styled.a`

`