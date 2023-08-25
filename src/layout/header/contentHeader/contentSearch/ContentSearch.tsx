import React from 'react';
import styled from "styled-components";

export const ContentSearch = () => {
    return (
        <StyledInput placeholder={'Find friends, communities or pages here'} type={'search'}/>
    );
};

const StyledInput = styled.input`
  border: 0;
  background-color: #F5F7FB;
  height: 48px;
  border-radius: 8px;
  max-width: 50%;
  width: 100%;
  padding: 12px;
`