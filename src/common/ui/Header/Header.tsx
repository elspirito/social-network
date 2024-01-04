import React from 'react'
import styled from 'styled-components'
import { Logo } from 'common/ui/Logo/Logo'
import { ContentHeader } from 'common/ui/ContentHeader/ContentHeader'
import { UserControls } from 'common/ui/UserControls/UserControls'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <ContentHeader />
      <UserControls />
    </StyledHeader>
  )
}

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
`
