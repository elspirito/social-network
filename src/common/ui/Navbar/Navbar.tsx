import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <NavLink to={'/profile'}>Моя страница</NavLink>
        <NavLink to={'/messages'}>Сообщения</NavLink>
        <NavLink to={'/users'}>Пользователи</NavLink>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;

  & > ul {
    display: flex;
    flex-direction: column;

    & > a {
      text-decoration: none;
      color: #1e3786;
    }

    & > a.active {
      text-decoration: none;
      color: #03eaff;
    }

    & > a:hover {
      color: steelblue;
    }
  }
`
