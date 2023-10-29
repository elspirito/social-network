import React from 'react';
import styled from "styled-components";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {DialogsPage} from "./pages/dialogs/DialogsPage";
import {Navigate, Route, Routes} from "react-router-dom";


export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/dialogs'} element={<DialogsPage/>}/>

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