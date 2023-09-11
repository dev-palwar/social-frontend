import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import "../src/Index.css"
import App from './App';
import Home from './Pages/Home';
import Login from './Pages/Login';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    {document.cookie ? <App /> : <Login />}
  </StrictMode>
);