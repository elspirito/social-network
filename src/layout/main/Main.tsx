import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./pages/profile/profileHeader/ProfileHeader";
import {PostWritingForm} from "./pages/profile/postWritingForm/PostWritingForm";
import {Post} from "./pages/profile/post/Post";
import {Profile} from "./pages/profile/Profile";
import {Dialogs} from "./pages/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs'} element={<Dialogs/>}/>
            </Routes>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  grid-area: m;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 24px;
`