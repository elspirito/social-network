import React from 'react'
import styled from 'styled-components'
import { FriendsBar } from 'features/profile/ui/FriendsBar/FriendsBar'

export const ProfileAside: React.FC = () => {
  return (
    <StyledAsideRight>
      <FriendsBar />
    </StyledAsideRight>
  )
}

const StyledAsideRight = styled.aside`
  grid-area: r;
`
