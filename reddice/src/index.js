import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import App from './App';

React.render(
  <Router history={BrowserHistory} routes={routes} />,

  document.getElementById('root')
);
{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

