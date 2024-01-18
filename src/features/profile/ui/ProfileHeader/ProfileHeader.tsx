import React, { FC } from 'react'
import styled from 'styled-components'
import headerImg from '../../../../assets/img/profileHeaderImg.png'
import Avatar from 'antd/lib/avatar/avatar'
import { UserStatus } from 'features/profile/ui/UserStatus/UserStatus'
import { useAppSelector } from 'common/hooks/customHooks'
import { selectStatus } from 'features/profile/model/profile.selector'

type PropsType = {
  avatar?: string
  name: string | undefined
}

export const ProfileHeader: FC<PropsType> = ({ avatar, name }) => {
  const status = useAppSelector(selectStatus)
  console.log(status)
  return (
    <StyledProfileHeader>
      <ProfileHeadImg src={headerImg} />
      <Avatar src={avatar} size={100} />
      <h2>{name}</h2>
      <UserStatus status={status} />
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
