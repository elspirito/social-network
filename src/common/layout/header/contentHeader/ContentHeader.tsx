import React from 'react'
import styled from 'styled-components'
import { PageTitle } from './pageTitle/PageTitle'
import { Search } from '../../../components/Search/Search'

export const ContentHeader = () => {
  return (
    <StyledContentHeader>
      <PageTitle />
      <Search />
    </StyledContentHeader>
  )
}

const StyledContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
