import React from 'react';
import styled from "styled-components";
import {Friends} from './friends/Friends';

export const ProfileAside = () => {
    return (
        <StyledAsideRight>
            <Friends/>
        </StyledAsideRight>
    );
};

const StyledAsideRight = styled.aside`
  grid-area: r;
`