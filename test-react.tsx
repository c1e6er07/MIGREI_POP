import React from 'react';
import ReactDOM from 'react-dom/client';

function TestApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '60px',
        borderRadius: '20px',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          margin: '0 0 20px 0',
          color: '#667eea'
        }}>
          🎉 React Funcionando!
        </h1>
        <p style={{ 
          fontSize: '24px', 
          margin: '10px 0',
          color: '#333'
        }}>
          ✅ React {React.version}
        </p>
        <p style={{ 
          fontSize: '24px', 
          margin: '10px 0',
          color: '#333'
        }}>
          ✅ ReactDOM carregado
        </p>
        <p style={{ 
          fontSize: '24px', 
          margin: '10px 0',
          color: '#333'
        }}>
          ✅ Componente renderizado
        </p>
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '30px',
          border: '2px solid #10B981'
        }}>
          <p style={{ margin: 0, color: '#10B981', fontSize: '18px', fontWeight: 'bold' }}>
            SISTEMA OPERACIONAL
          </p>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = `
    <div style="min-height: 100vh; background: #ef4444; color: white; display: flex; align-items: center; justify-content: center; font-family: Arial; font-size: 24px; padding: 20px; text-align: center;">
      <div>
        <h1 style="font-size: 48px; margin-bottom: 20px;">❌ ERRO</h1>
        <p>Elemento 'root' não encontrado no DOM!</p>
      </div>
    </div>
  `;
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><TestApp /></React.StrictMode>);
  console.log('✅ React montado com sucesso!');
}
