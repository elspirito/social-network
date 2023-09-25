import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo href={"/"}>
            <LogoSign>
                <Icon iconId={'tempLogo'}/>
            </LogoSign>

            <span>WeShare</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px;
  color: #000;
  text-decoration: none;
  
  span {
    font-size: 20px;
    font-weight: bold;
  }
  
  &:hover {
    color: red;
  }
`
const LogoSign = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: #1B79E5;
  color: #fff;
  line-height: 0;
`