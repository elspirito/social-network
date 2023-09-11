import React from 'react';
import styled from "styled-components";
import {NavLink} from "../../../components/navLink/NavLink";

let pages = [
    {id: 1, title: 'Profile', src: '#'},
    {id: 2, title: 'Messages', src: '#'},
    {id: 3, title: 'Feed', src: '#'},
    {id: 4, title: 'Music', src: '#'},
    {id: 5, title: 'Settings', src: '#'}
]

export const Navbar = () => {

    return (
        <StyledNavbar>
            <ul>
                {pages.map(i => <li key={i.id}><NavLink href={'#'} linkText={i.title}/></li>)}
            </ul>
        </StyledNavbar>
    );
};

const StyledNavbar = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
`