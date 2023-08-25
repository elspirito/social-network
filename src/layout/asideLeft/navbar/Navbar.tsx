import React from 'react';
import styled from "styled-components";

let pages = [
    {id: 1, title: 'Feed', src: '#'},
    {id: 2, title: 'Friends', src: '#'},
    {id: 3, title: 'Events', src: '#'},
    {id: 4, title: 'Watch Videos', src: '#'},
    {id: 5, title: 'Marketplace', src: '#'},
    {id: 6, title: 'Files', src: '#'}
]

export const Navbar = () => {

    return (
        <StyledNavbar>
            <ul>
                {pages.map(i => <li key={i.id}><a href={i.src}>{i.title}</a></li>)}
            </ul>
        </StyledNavbar>
    );
};

const StyledNavbar = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
`