import React from 'react';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";


import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
