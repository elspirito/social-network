import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr .5fr;
  grid-template-rows: 100px auto;
  gap: 24px 24px;
  grid-template-areas: 
    "h h h"
    "l m m";
`