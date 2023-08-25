import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: .5fr 1fr .5fr;
  grid-template-rows: 100px auto;
  gap: 0px 0px;
  grid-template-areas: 
    "h h h"
    "l m r";
`