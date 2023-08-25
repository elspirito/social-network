import React from 'react';
import {Header} from "./layout/header/Header";
import {AsideRight} from "./layout/asideRight/AsideRight";
import {AsideLeft} from "./layout/asideLeft/AsideLeft";
import {Main} from '../src/layout/main/Main'
import {Layout} from "./components/Layout";

function App() {
  return (
    <Layout>
        <Header/>
        <AsideLeft/>
        <Main/>
        <AsideRight/>
    </Layout>
  );
}

export default App;
