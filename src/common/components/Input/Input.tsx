import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type PropsType = {
  placeholder: string
  value: string
  onChange: (text: string) => void
  onKeyDown: (text: string) => void
}

export const Input: React.FC<PropsType> = ({ placeholder, value, onChange, onKeyDown }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyDown(e.currentTarget.value)
    }
  }

  return <StyledInput placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
}

const StyledInput = styled.input`
  width: 100%;
  background-color: #f5f7fb;
  border: 0;
  height: 48px;
  border-radius: 8px;
  padding: 8px 16px;
`
