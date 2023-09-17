import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./pages/profile/profileHeader/ProfileHeader";
import {PostWritingForm} from "./pages/profile/postWritingForm/PostWritingForm";
import {Post} from "./pages/profile/post/Post";
import {Profile} from "./pages/profile/Profile";
import {Messages} from "./pages/messages/Messages";
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages'} element={<Messages/>}/>
            </Routes>
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