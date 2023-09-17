import React from 'react';
import {Header} from "./layout/header/Header";
import {ProfileAside} from "./layout/main/pages/profile/profileAside/ProfileAside";
import {AsideLeft} from "./layout/asideLeft/AsideLeft";
import {Main} from '../src/layout/main/Main'
import {Layout} from "./components/Layout";

function App() {
  return (
    <Layout>
        <Header/>
        <AsideLeft/>
        <Main/>
    </Layout>
  );
}

export default App;
