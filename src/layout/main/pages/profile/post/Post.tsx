import React from 'react';
import styled from "styled-components";

export const Post: React.FC = () => {
    return (
        <StyledPost>
            Post
        </StyledPost>
    );
};

const StyledPost = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
`