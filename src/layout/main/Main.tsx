import React from 'react';
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            Main
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: #bbb;
  grid-area: m;
`