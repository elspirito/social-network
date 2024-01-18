import React, { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'
import { Input } from 'common/components/Input/Input'
import { useAppDispatch } from 'common/hooks/customHooks'
import { updateUserStatusTC } from 'features/profile/model/profile.actions'

type Props = {
  status: string
}

export const UserStatus: FC<Props> = ({ status }) => {
  const [isActive, setIsActive] = useState(false)
  const [statusValue, setStatusValue] = useState(status)
  const dispatch = useAppDispatch()

  const onChangeHandler = (text: string) => {
    setStatusValue(text)
  }

  const onKeyDownHandler = (text: string) => {
    dispatch(updateUserStatusTC(text))
    setIsActive(false)
  }

  return (
    <StyledUserStatus>
      {isActive ? (
        <Input
          autoFocus
          value={statusValue}
          onKeyDown={() => onKeyDownHandler(statusValue)}
          onChange={onChangeHandler}
          onBlur={() => setIsActive(false)}
        />
      ) : (
        <p onClick={() => setIsActive(true)}>{status}</p>
      )}
    </StyledUserStatus>
  )
}

const StyledUserStatus = styled.div``
