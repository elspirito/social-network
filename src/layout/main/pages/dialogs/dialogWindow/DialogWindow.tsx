import React from 'react';
import styled from "styled-components";

export const DialogWindow: React.FC = () => {
    return (
        <StyledDialogWindow>
            Messages
        </StyledDialogWindow>
    );
};

const StyledDialogWindow = styled.div`
  padding: 24px;
`