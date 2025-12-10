import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';

const LandingTeste: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-slate-950" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/20 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/15 blur-[140px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/70 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
            <Sparkles className="w-4 h-4" /> Landing de Teste
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Migre sua energia com a MIGREI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-200">
              migreimle.com.br
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Esta landing de validação garante que o domínio está pronto para receber campanhas.
            Use os CTAs abaixo para navegar para as rotas principais e testar o fluxo fim a fim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/empresas" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" /> Ver solução empresarial
              </button>
            </Link>
            <Link to="/franquia" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-lg px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Ver modelo de franquia
              </button>
            </Link>
          </div>
          <p className="text-sm text-slate-500">
            Dica: aponte DNS para a Vercel, publique, e valide este slug `/lp` como prova de vida do domínio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingTeste;
