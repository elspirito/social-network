import React from 'react'
import styled from 'styled-components'
import avatar_0004 from '../../../assets/img/avatars/avatar_0004.webp'
import Avatar from 'antd/lib/avatar/avatar'

type FriendLinkPropsType = {
  firstName: string
  lastName: string
  login: string
  isOnline: boolean
  icon?: string
}

export const FriendItem: React.FC<FriendLinkPropsType> = ({ firstName, lastName, login, isOnline, icon }) => {
  return (
    <StyledFriendItem>
      <FriendUserPic>
        <Badge className={isOnline ? 'online' : 'offline'} />
        <Avatar src={avatar_0004} />
      </FriendUserPic>
      <FullName>
        <UserName>
          <FirstName>{firstName}</FirstName>
          <LastName>{lastName}</LastName>
        </UserName>
        <LoginName>{login}</LoginName>
      </FullName>
      {icon && <span className='material-symbols-outlined'>{icon}</span>}
    </StyledFriendItem>
  )
}

const StyledFriendItem = styled.a`
  display: flex;
  gap: 8px;
  padding: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f7fb;
  }
`
const FriendUserPic = styled.div`
  position: relative;
  flex-shrink: 0;
`
const Badge = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  padding: 4px;
  outline: 4px solid #fff;
  border-radius: 50%;

  &.online {
    background: #17c59c;
  }

  &.offline {
    visibility: hidden;
  }
`
const FullName = styled.div`
  width: 100%;
`
const UserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`
const FirstName = styled.span``
const LastName = styled.span``
const LoginName = styled.small`
  color: #ccc;
`
