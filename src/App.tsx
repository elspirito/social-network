import React from 'react';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {AsideRight} from "./layout/asideRight/AsideRight";
import {AsideLeft} from "./layout/asideLeft/AsideLeft";
import {Main} from '../src/layout/main/Main'
import {ContainerWrapper} from "./components/ContainerWrapper";

function App() {
  return (
    <ContainerWrapper>
        <Header/>
        <AsideLeft/>
        <Main/>
        <AsideRight/>
        <Footer/>
    </ContainerWrapper>
  );
}

export default App;
