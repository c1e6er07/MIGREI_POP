import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

type EBState = { hasError: boolean; error?: Error };
type EBProps = { children: React.ReactNode };

class ErrorBoundary extends React.Component<EBProps, EBState> {
  declare props: Readonly<EBProps>;
  state: EBState = { hasError: false };

  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true, error };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Silent error handling - log only in production
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-red-500/20 rounded-xl p-8 max-w-lg text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Ops! Algo deu errado</h1>
            <p className="text-slate-400 mb-6">
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-lg hover:from-emerald-500 hover:to-cyan-500 transition-all"
            >
              Recarregar Página
            </button>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-slate-500 text-sm cursor-pointer hover:text-slate-400">
                  Detalhes técnicos
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-slate-950 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    try {
      window.scrollTo(0, 0);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // Ignore scroll errors
    }
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};
export default App;
