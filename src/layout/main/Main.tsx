import React from 'react';
import styled from "styled-components";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {DialogsPage} from "./pages/dialogsPage/DialogsPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {UsersPage} from "./pages/usersPage/UsersPage";
import {NotFound} from "./pages/notFound/notFound";


export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/dialogs'} element={<DialogsPage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>

                <Route path={'/*'} element={<NotFound/>}/>
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
