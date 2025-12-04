import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: system-ui;">Erro: elemento root não encontrado</div>';
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}