import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingAI from './components/FloatingAI';
import Home from './pages/Home';
import ParaEmpresas from './pages/ParaEmpresas';
import Franquia from './pages/Franquia';
import Noticias from './pages/Noticias';
import Calculadora from './pages/Calculadora';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosUso from './pages/TermosUso';
import Health from './pages/Health';
import Admin from './pages/Admin';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Invoices from './pages/dashboard/Invoices';
import Finance from './pages/dashboard/Finance';
import Consumption from './pages/dashboard/Consumption';
import Reports from './pages/dashboard/Reports';
import Compliance from './pages/dashboard/Compliance';
import Settings from './pages/dashboard/Settings';
import { AuthProvider } from './contexts/AuthContext';
import Contratar from './pages/Contratar';

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
  const paramsWindow = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const getParam = (key: string) => paramsWindow.get(key);
  const previewParam = (getParam('preview') || getParam('app') || getParam('no_cs'))?.toLowerCase();
  const forceCSParam = (getParam('comingsoon') || getParam('cs'))?.toLowerCase();
  const previewRequested = previewParam ? ['1', 'true', 'yes', 'open'].includes(previewParam) : false;
  const forceComingSoon = forceCSParam ? ['1', 'true', 'yes'].includes(forceCSParam) : false;
  const showFullApp = !forceComingSoon || previewRequested;

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          {showFullApp ? (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/empresas" element={<ParaEmpresas />} />
                <Route path="/franquia" element={<Franquia />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/contratar" element={<Contratar />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/privacidade" element={<PoliticaPrivacidade />} />
                <Route path="/termos" element={<TermosUso />} />
                <Route path="/health" element={<Health />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />

                <Route path="/app" element={<DashboardLayout />}>
                  <Route index element={<Overview />} />
                  <Route path="faturas" element={<Invoices />} />
                  <Route path="financeiro" element={<Finance />} />
                  <Route path="consumo" element={<Consumption />} />
                  <Route path="relatorios" element={<Reports />} />
                  <Route path="compliance" element={<Compliance />} />
                  <Route path="config" element={<Settings />} />
                </Route>

                <Route path="/migrei-ia" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Routes>
              <Footer />
              <FloatingAI />
            </>
          ) : (
            <Routes>
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          )}
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};
export default App;
