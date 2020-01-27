import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouteHandler from './Utils/RouteHandler';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: positions.TOP_RIGHT,
    timeout: 3000,
    offset: '20px',
    transition: transitions.FADE
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <RouteHandler />
    </AlertProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
