import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

let pages = [
  { id: 1, title: 'Profile', src: '#' },
  { id: 2, title: 'Messages', src: '#' },
  { id: 3, title: 'Feed', src: '#' },
  { id: 4, title: 'Music', src: '#' },
  { id: 5, title: 'Settings', src: '#' },
]

export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <NavLink to={'/profile/:id'}>Моя страница</NavLink>
        <NavLink to={'/dialogs'}>Сообщения</NavLink>
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
