import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {PostWritingForm} from "./postWritingForm/PostWritingForm";
import {Post} from "./post/Post";
import {ProfileAside} from "./profileAside/ProfileAside";
import {FriendType} from "../../../../state/state";

type ProfilePropsType = {
    friends: FriendType[]
}

export const Profile: React.FC<ProfilePropsType> = ({friends}) => {
    return (
        <StyledProfile>
            <ProfileContent>
                <ProfileHeader/>
                <PostWritingForm/>
                <Post/>
                <Post/>
                <Post/>
            </ProfileContent>
            <ProfileAside friends={friends}/>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw;
  grid-template-rows: 100px auto;
  gap: 24px;
  grid-template-areas: 
    "p p r"
`
const ProfileContent = styled.div`
  grid-area: p;
  display: flex;
  flex-direction: column;
  gap: 24px;
`