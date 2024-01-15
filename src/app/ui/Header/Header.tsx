import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Logo } from 'app/ui/Logo/Logo'
import { ContentHeader } from 'app/ui/ContentHeader/ContentHeader'
import { UserControls } from 'app/ui/UserControls/UserControls'
import { useAppDispatch } from 'common/hooks/customHooks'
import { checkMeTC } from 'features/auth/model/auth.actions'
import { selectIsFetchingLoginData, selectIsLoggedIn } from 'features/auth/model/auth.selector'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isLoginFetching = useSelector(selectIsFetchingLoginData)

  return (
    <StyledHeader>
      <Logo />
      <ContentHeader />
      {isLoginFetching ? <Spin /> : isLoggedIn ? <UserControls /> : <p>Login</p>}
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
