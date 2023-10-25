import React from 'react';
import styled from "styled-components";
import {Profile} from "./pages/profile/Profile";
import {Dialogs} from "./pages/dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";


export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

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