import React from 'react';
import styled from "styled-components";
import headerImg from '../../../../../img/profileHeaderImg.png'
import {UserPic} from "../../../../../components/userPic/UserPic";
import avatar_0004 from '../../../../../img/avatars/avatar_0004.webp'

export const ProfileHeader = () => {
    return (
        <StyledProfileHeader>
            <ProfileHeadImg src={headerImg}/>
            <UserPic src={avatar_0004} borderRadius={'12px'}/>
        </StyledProfileHeader>
    );
};

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

