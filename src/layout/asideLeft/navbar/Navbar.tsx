import React from 'react';
import styled from "styled-components";
import {NavLink, Routes, Route} from "react-router-dom";
import {Profile} from "../../main/pages/profile/Profile";
import {Messages} from "../../main/pages/messages/Messages";

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
                {/*{pages.map(el => <li key={el.id}><NavLink href={'#'} icon={'tempLogo'} linkText={el.title}/></li>)}*/}
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/messages'}>Messages</NavLink>
            </ul>

        </StyledNavbar>
    );
};

const StyledNavbar = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
`