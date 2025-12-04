import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('🔍 DEBUG: index.tsx carregado');
console.log('🔍 DEBUG: React version:', React.version);
console.log('🔍 DEBUG: ReactDOM:', !!ReactDOM);

const rootElement = document.getElementById('root');
console.log('🔍 DEBUG: rootElement encontrado?', !!rootElement);

if (!rootElement) {
  console.error('❌ ERRO: Elemento root não encontrado!');
  document.body.innerHTML = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:#ef4444;color:white;display:flex;align-items:center;justify-content:center;font-family:Arial;padding:20px;text-align:center;"><div><h1 style="font-size:48px;margin-bottom:20px;">❌ ERRO CRÍTICO</h1><p style="font-size:20px;">Elemento "root" não encontrado no DOM!</p></div></div>';
  throw new Error("Could not find root element");
}

console.log('🔍 DEBUG: Criando root React...');
const root = ReactDOM.createRoot(rootElement);
console.log('🔍 DEBUG: Root criado, renderizando App...');
root.render(<React.StrictMode><App /></React.StrictMode>);
console.log('✅ DEBUG: App renderizado com sucesso!');
