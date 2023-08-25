import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <LogoSign>
                <Icon iconId={'tempLogo'}/>
            </LogoSign>

            <span>WeShare</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  span {
    font-size: 20px;
    font-weight: bold;
  }
`
const LogoSign = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: #1B79E5;
`