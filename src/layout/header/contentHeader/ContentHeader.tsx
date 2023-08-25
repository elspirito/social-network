import React from 'react';
import styled from "styled-components";
import {PageTitle} from "./pageTitle/PageTitle";
import {ContentSearch} from "./contentSearch/ContentSearch";

export const ContentHeader = () => {
    return (
        <StyledContentHeader>
            <PageTitle/>
            <ContentSearch/>
        </StyledContentHeader>
    );
};

const StyledContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`