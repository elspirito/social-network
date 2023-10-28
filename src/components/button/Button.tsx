import React from 'react';
import styled from "styled-components";

type PropsType = {
    name: string
    onClick: () => void
}

export const Button: React.FC<PropsType> = ({name, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{name}</StyledButton>
    );
};

const StyledButton = styled.button`
  background-color: #1B79E5;
  border: 0;
  color: white;
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 16px;
`