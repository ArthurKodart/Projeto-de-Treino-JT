import React from 'react';

export const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0b0f19',
      color: '#f8fafc',
      fontFamily: 'system-ui, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: '#151c2e',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '560px'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '12px', color: '#6366f1' }}>
          🍿 CineTech Frontend
        </h1>
        <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
          O ambiente de desenvolvimento está pronto e funcionando!
          <br /><br />
          Agora a equipe de Frontend deve criar as páginas, componentes e chamadas de API
          seguindo o passo a passo detalhado em:
        </p>
        <div style={{
          background: '#1e293b',
          padding: '12px 20px',
          borderRadius: '8px',
          display: 'inline-block',
          fontWeight: 600,
          color: '#38bdf8'
        }}>
          📁 docs/3_PRD_FRONTEND.md
        </div>
      </div>
    </div>
  );
};
