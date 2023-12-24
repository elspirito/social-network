import React from 'react';
import styled from 'styled-components';
import { Logo } from '../header/logo/Logo';
import { ContentHeader } from './contentHeader/ContentHeader';
import { UserControls } from './userControls/UserControls';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <ContentHeader />
      <UserControls />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fff;
  grid-area: h;
  display: grid;
  grid-template-columns: calc(20vw + 24px) 1fr calc(20vw + 24px);
  align-items: center;
  border-bottom: 1px solid #ebedf0;
  position: fixed;
  z-index: 9999;
  width: 100%;
`;
