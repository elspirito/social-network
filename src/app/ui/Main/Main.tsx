import React from 'react'
import styled from 'styled-components'
import { ProfilePage } from 'features/profile/ProfilePage'
import { MessagesPage } from 'features/messages/ui/MessagesPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from 'features/users/ui/UsersPage'
import { PageNotFound } from 'app/ui/PageNotFound/PageNotFound'
import { PrivateRoute } from 'common/utils/PrivateRoute'
import { Login } from 'features/auth/ui/Login/Login'

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={'/'} element={<Navigate to={'/profile/30150'} />} />

          <Route path={'/profile/:userId'} element={<ProfilePage />} />
          <Route path={'/messages'} element={<MessagesPage />} />
          <Route path={'/users'} element={<UsersPage />} />
        </Route>

        <Route path={'/*'} element={<PageNotFound />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  grid-area: m;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 24px;
`
