import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'common/components/Input/Input'
import { useAppSelector } from 'common/hooks/customHooks'
import { selectStatus } from 'features/profile/model/profile.selector'

export const Status = () => {
  const [isActive, setIsActive] = useState(false)
  const status = useAppSelector(selectStatus)

  return (
    <StyledStatus>
      {isActive ? (
        <Input autoFocus value={status} onKeyDown={() => {}} onChange={() => {}} onBlur={() => setIsActive(false)} />
      ) : (
        <p onClick={() => setIsActive(true)}>{status}</p>
      )}
    </StyledStatus>
  )
}

const StyledStatus = styled.div``
