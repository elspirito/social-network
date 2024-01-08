import React from 'react'
import styled from 'styled-components'
import { UserButton } from 'app/ui/UserButton/UserButton'

export const UserControls = () => {
  return (
    <StyledUserControls>
      <button>1</button>
      <button>2</button>
      <UserButton />
    </StyledUserControls>
  )
}

const StyledUserControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin: 24px;
`
