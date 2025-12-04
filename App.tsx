import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingAI from './components/FloatingAI';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ParaEmpresas from './pages/ParaEmpresas';
import Calculadora from './pages/Calculadora';
import MigreiIA from './pages/MigreiIA';
import MigreiBank from './pages/MigreiBank';
import Contato from './pages/Contato';
import Noticias from './pages/Noticias';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import Health from './pages/Health';
import TermosUso from './pages/TermosUso';
import Admin from './pages/Admin';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Invoices from './pages/dashboard/Invoices';
import Settings from './pages/dashboard/Settings';
import Consumption from './pages/dashboard/Consumption';
import Reports from './pages/dashboard/Reports';
import Finance from './pages/dashboard/Finance';
import Instituto from './pages/dashboard/Instituto';
import Compliance from './pages/dashboard/Compliance';

type EBState = { hasError: boolean; error?: Error };
type EBProps = { children: React.ReactNode };

class ErrorBoundary extends React.Component<EBProps, EBState> {
  declare props: Readonly<EBProps>;
  state: EBState = { hasError: false };

  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
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
    const scrollTarget = location.state && typeof location.state === 'object' && 'scrollTo' in location.state 
      ? (location.state as { scrollTo: string }).scrollTo 
      : null;
    
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <FloatingAI />
      <Footer />
    </div>
  );
};
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/health" element={<Health />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/migrei-bank" element={<MigreiBank />} />
              <Route path="/empresas" element={<ParaEmpresas />} />
              <Route path="/calculadora" element={<Calculadora />} />
              <Route path="/migrei-ia" element={<MigreiIA />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos" element={<TermosUso />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
               <Route index element={<Overview />} />
               <Route path="faturas" element={<Invoices />} />
               <Route path="financeiro" element={<Finance />} />
               <Route path="consumo" element={<Consumption />} />
               <Route path="relatorios" element={<Reports />} />
               <Route path="instituto" element={<Instituto />} />
               <Route path="compliance" element={<Compliance />} />
               <Route path="config" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};
export default App;