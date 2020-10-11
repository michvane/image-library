import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Containers/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/TopBar/Core/Router';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Router />
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
