import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type NavLinkPropsType = {
    href: string
    icon?: string
    linkText?: string
}

export const NavLink: React.FC<NavLinkPropsType> = (props) => {
    return (
        <StyledNavLink href={props.href}>
            {props.icon && <NavIcon><Icon iconId={props.icon}/></NavIcon>}
            {props.linkText}
        </StyledNavLink>
    );
};

const StyledNavLink = styled.a`
 padding: 8px;
`
const NavIcon = styled.span`

`
