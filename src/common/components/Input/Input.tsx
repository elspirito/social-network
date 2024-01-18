import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

type PropsType = {
  placeholder?: string
  value: string
  onChange: (text: string) => void
  onKeyDown: (text: string) => void
  onBlur?: () => void
  autoFocus?: boolean
}

export const Input: FC<PropsType> = ({ placeholder, value, onChange, onKeyDown, onBlur, autoFocus }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyDown(e.currentTarget.value)
    }
  }

  return (
    <StyledInput
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onBlur={onBlur}
    />
  )
}

const StyledInput = styled.input`
  width: 100%;
  background-color: #f5f7fb;
  border: 0;
  height: 48px;
  border-radius: 8px;
  padding: 8px 16px;
`
