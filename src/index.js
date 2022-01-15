import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename="/" hashType="slash">
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
