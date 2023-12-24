import React from 'react'
import styled from 'styled-components'

export const Search = () => {
  return <StyledInput placeholder={'Find friends, communities or pages here'} type={'search'} />
}

const StyledInput = styled.input`
  font-family: 'Inter', sans-serif;
  border: 0;
  background-color: #f5f7fb;
  height: 48px;
  border-radius: 8px;
  width: 100%;
  padding: 12px;
`
