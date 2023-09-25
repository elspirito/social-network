import React from 'react';
import styled from "styled-components";
import {Friends} from './friends/Friends';
import {FriendType} from "../../../../../state/state";

type ProfileAsidePropsType = {
    friends: FriendType[]
}

export const ProfileAside: React.FC<ProfileAsidePropsType> = ({friends}) => {
    return (
        <StyledAsideRight>
            <Friends friends={friends}/>
        </StyledAsideRight>
    );
};

const StyledAsideRight = styled.aside`
  grid-area: r;
`