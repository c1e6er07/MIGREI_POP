import React, { useState } from 'react';
import { supabase } from '../../services/supabase';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Loader2, Mail, Lock, ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { LOGO_URL } from '../../constants';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg('Credenciais inválidas. Verifique seu email e senha.');
    } else {
      const from = location.state?.from?.pathname || '/app';
      navigate(from, { replace: true });
    }

    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <div className="hidden lg:flex w-1/2 bg-slate-900 border-r border-slate-800 relative overflow-hidden flex-col justify-between p-12"> <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div> <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]"></div> <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"></div> <div className="relative z-10"> <Link to="/" className="inline-block mb-12"> <img src={LOGO_URL} alt="MIGREI" className="h-12 w-auto object-contain" /> </Link> <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}> <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"> <ShieldCheck className="w-4 h-4 text-emerald-500" /> <span className="text-emerald-500 text-xs font-bold uppercase tracking-wide">Portal de Segurança</span> </div> <h1 className="text-4xl font-display font-bold text-white mb-6 leading-tight"> Acesso Exclusivo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">MIGREI Bank & SaaS</span> </h1> <p className="text-slate-400 text-lg mb-8 max-w-md"> Gerencie suas unidades, faturas e realize pagamentos via Open Finance em um ambiente monitorado e criptografado. </p> <div className="space-y-4"> <div className="flex items-center gap-3 text-slate-300"> <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Conexão SSL 256-bits (Bank Grade)</span> </div> <div className="flex items-center gap-3 text-slate-300"> <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Autenticação de Fator Duplo disponível</span> </div> <div className="flex items-center gap-3 text-slate-300"> <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Monitoramento de acessos 24/7</span> </div> </div> </motion.div> </div> <div className="relative z-10 text-xs text-slate-500"> <p>© {new Date().getFullYear()} MIGREI MLE CONSULT. Todos os acessos são logados.</p> </div> </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative"> <Link to="/" className="absolute top-8 left-8 text-slate-400 hover:text-white flex items-center gap-2 transition-colors"> <ArrowLeft className="w-4 h-4" /> Voltar ao site </Link> <div className="w-full max-w-md"> <div className="text-center mb-10 lg:hidden"> <img src={LOGO_URL} alt="MIGREI" className="h-10 w-auto mx-auto mb-4" /> </div> <div className="mb-8"> <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h2> <p className="text-slate-400 leading-relaxed"> Identifique-se para gerenciar suas <strong className="text-slate-200">Faturas</strong>, <strong className="text-slate-200">Telemetria</strong> e acessar o <strong className="text-emerald-400">MIGREI Bank</strong>. </p> </div> <form onSubmit={handleLogin} className="space-y-5"> {errorMsg && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-3 text-red-400 text-sm"> <AlertCircle className="w-5 h-5 shrink-0" /> {errorMsg} </motion.div> )} <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Email Corporativo</label> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Mail className="h-5 w-5 text-slate-500" /> </div> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all sm:text-sm" placeholder="nome@empresa.com.br" required /> </div> </div> <div className="space-y-2"> <div className="flex justify-between items-center"> <label className="text-sm font-bold text-slate-300">Senha</label> <a href="#" className="text-xs text-emerald-500 hover:text-emerald-400">Esqueceu a senha?</a> </div> <div className="relative"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Lock className="h-5 w-5 text-slate-500" /> </div> <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full pl-10 pr-10 py-3 border border-slate-700 rounded-lg leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all sm:text-sm" placeholder="••••••••" required /> <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"> {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} </button> </div> </div> <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"> {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2"/> : <Lock className="h-4 w-4 mr-2" />} {loading ? 'Validando Credenciais...' : 'Acessar Ambiente Seguro'} </button> </form> <div className="mt-8 text-center"> <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full"> <Lock className="w-3 h-3 text-emerald-500" /> <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Ambiente Protegido por Criptografia</span> </div> </div> </div> </div>
    </div>
  );
};
export default Login;