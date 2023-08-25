import React from 'react';
import styled from "styled-components";
import {Logo} from '../header/logo/Logo'
import {ContentHeader} from "./contentHeader/ContentHeader";
import {UserControls} from "./userControls/UserControls";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <ContentHeader/>
            <UserControls/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #fff;
  height: 100px;
  grid-area: h;
  display: grid;
  grid-template-columns: .5fr 1fr .5fr;
  align-items: center;
  border-bottom: 1px solid #ebedf0;
`
