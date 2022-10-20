import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContex from './AuthContex/AuthContex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContex>
      <App />
    </AuthContex>
  </React.StrictMode>
);

