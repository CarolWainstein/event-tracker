import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar de 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // Cria a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

