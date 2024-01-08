import React from 'react'
import styled from 'styled-components'
import { UserBadge } from 'app/ui/UserBadge/UserBadge'
import { Navbar } from 'app/ui/Navbar/Navbar'

export const AsideLeft = () => {
  return (
    <StyledAsideLeft>
      <UserBadge />
      <Navbar />
    </StyledAsideLeft>
  )
}

const StyledAsideLeft = styled.aside`
  grid-area: l;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
  top: 124px;
`
