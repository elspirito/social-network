import React from 'react';
import styled from "styled-components";
import ContentTitle from "./contentTitle/ContentTitle";
import {ContentSearch} from "./contentSearch/ContentSearch";

export const ContentHeader = () => {
    return (
        <StyledContentHeader>
            <ContentTitle/>
            <ContentSearch/>
        </StyledContentHeader>
    );
};

const StyledContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`