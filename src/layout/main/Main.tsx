import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./pages/profile/profileHeader/ProfileHeader";
import {PostWritingForm} from "./pages/profile/postWritingForm/PostWritingForm";
import {Post} from "./pages/profile/post/Post";
import {Profile} from "./pages/profile/Profile";
import {Dialogs} from "./pages/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {FriendType} from "../../state/state";

type MainPropsType = {
    friends: FriendType[]
}
export const Main: React.FC<MainPropsType> = ({friends}) => {
    return (
        <StyledMain>
            <Routes>
                <Route path={'/profile'} element={<Profile friends={friends}/>}/>
                <Route path={'/dialogs'} element={<Dialogs friends={friends}/>}/>
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