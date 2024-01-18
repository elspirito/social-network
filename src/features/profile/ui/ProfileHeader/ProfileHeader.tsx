import React, { FC } from 'react'
import styled from 'styled-components'
import headerImg from '../../../../assets/img/profileHeaderImg.png'
import Avatar from 'antd/lib/avatar/avatar'
import { Status } from 'features/profile/ui/Status/Status'

type PropsType = {
  avatar?: string
  name: string | undefined
}

export const ProfileHeader: FC<PropsType> = ({ avatar, name }) => {
  return (
    <StyledProfileHeader>
      <ProfileHeadImg src={headerImg} />
      <Avatar src={avatar} size={100} />
      <h2>{name}</h2>
      <Status />
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
