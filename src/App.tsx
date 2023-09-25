import React from 'react';
import {Header} from "./layout/header/Header";
import {AsideLeft} from "./layout/asideLeft/AsideLeft";
import {Main} from '../src/layout/main/Main'
import {Layout} from "./components/Layout";
import {state} from "./state/state";


const App: React.FC = () => {
  return (
    <Layout>
        <Header/>
        <AsideLeft/>
        <Main friends={state.friends}/>
    </Layout>
  );
}

export default App;
