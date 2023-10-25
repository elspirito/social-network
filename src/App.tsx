import React from 'react';
import {Header} from "./layout/header/Header";
import {AsideLeft} from "./layout/asideLeft/AsideLeft";
import {Main} from '../src/layout/main/Main'
import {Layout} from "./components/Layout";



const App: React.FC = () => {
  return (
    <Layout>
        <Header/>
        <AsideLeft/>
        <Main/>
    </Layout>
  );
}

export default App;
