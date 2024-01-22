import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactGA from 'react-ga4';

if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") ReactGA.initialize('G-8LD765N85S');
const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

//const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience:'https://api.jybe.ca',
        redirect_uri: window.location.origin + window.location.pathname + window.location.search,
      }}
    >
      <Router>
        <App/>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
