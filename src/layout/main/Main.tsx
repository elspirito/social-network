import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./pages/profile/profileHeader/ProfileHeader";
import {PostWritingForm} from "./pages/profile/postWritingForm/PostWritingForm";
import {Post} from "./pages/profile/post/Post";

export const Main = () => {
    return (
        <StyledMain>
            <ProfileHeader/>
            <PostWritingForm/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  grid-area: m;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`