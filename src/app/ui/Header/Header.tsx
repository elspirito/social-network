import React from 'react'
import styled from 'styled-components'
import { Logo } from 'app/ui/Logo/Logo'
import { ContentHeader } from 'app/ui/ContentHeader/ContentHeader'
import { UserControls } from 'app/ui/UserControls/UserControls'
import { selectIsLoggedIn } from 'features/auth/model/auth.selector'
import { useSelector } from 'react-redux'

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // const isLoginFetching = useSelector(selectIsFetchingLoginData)
  console.log(isLoggedIn)
  return (
    <StyledHeader>
      <Logo />
      <ContentHeader />
      {isLoggedIn ? <UserControls /> : <a href={'/login'}>Login</a>}
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
