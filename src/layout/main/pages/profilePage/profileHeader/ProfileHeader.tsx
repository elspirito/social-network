import React from 'react'
import styled from 'styled-components'
import headerImg from '../../../../../assets/img/profileHeaderImg.png'
import avatar_0004 from '../../../../../assets/img/avatars/avatar_0004.webp'
import Avatar from 'antd/lib/avatar/avatar'

export const ProfileHeader = () => {
  return (
    <StyledProfileHeader>
      <ProfileHeadImg src={headerImg} />
      <Avatar src={avatar_0004} />
    </StyledProfileHeader>
  )
}

const StyledProfileHeader = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
`

const ProfileHeadImg = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`
