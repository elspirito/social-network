import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Input } from 'common/components/Input/Input'

type Props = {
  status: string
}

export const UserStatus: FC<Props> = ({ status }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <StyledUserStatus>
      {isActive ? (
        <Input autoFocus value={status} onKeyDown={() => {}} onChange={() => {}} onBlur={() => setIsActive(false)} />
      ) : (
        <p onClick={() => setIsActive(true)}>{status}</p>
      )}
    </StyledUserStatus>
  )
}

const StyledUserStatus = styled.div``
