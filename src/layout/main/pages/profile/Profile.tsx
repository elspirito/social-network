import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {PostWritingForm} from "./postWritingForm/PostWritingForm";
import {Post} from "./post/Post";

export const Profile = () => {
    return (
        <StyledProfile>
            <ProfileHeader/>
            <PostWritingForm/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`

`