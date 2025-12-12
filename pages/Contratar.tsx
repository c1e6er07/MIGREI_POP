import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  AlertTriangle,
  Target,
  DollarSign,
  Zap,
  ShieldCheck,
  CheckCircle,
  LineChart,
  Clock,
  Briefcase,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import NovaLeiCTA from '../components/NovaLeiCTA';

const Contratar: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-transparent opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-950/80 to-cyan-950/80 border-2 border-emerald-400/60 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <Sparkles className="w-5 h-5 text-emerald-300" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 text-sm md:text-base font-bold uppercase tracking-wide">Economia Imediata</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Pague Menos Energia</span>
              </h1>
              <p className="text-slate-300 mb-8 text-xl lg:text-2xl leading-relaxed">
                Sua empresa pode estar perdendo <span className="text-emerald-400 font-bold">30-40%</span> do orçamento hoje. Entre no Mercado Livre de Energia com um plano executável, seguro e mensurável.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">30-40%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Economia Média</div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-1">8-12m</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">ROI</div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">500+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Clientes</div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 text-center">
                  <div className="text-3xl font-black text-blue-400 mb-1">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Sucesso</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato" className="w-full sm:w-auto">
                  <button className="w-full bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-emerald-700/25 flex items-center justify-center transition-all hover:scale-105">
                    <Rocket className="w-5 h-5 mr-2" /> Começar Minha Economia
                  </button>
                </Link>
                <a href="https://forms.gle/izq23HmRnSYEFkJ9A" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-xl shadow-amber-600/25 flex items-center justify-center transition-all hover:scale-105">
                    Agendar Reunião
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center z-0">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] border-2 border-dashed border-emerald-500/20 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-dotted border-cyan-500/20 rounded-full" />
              </motion.div>
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-40" />
                <img src={LOGO_URL} alt="MIGREI MLE CONSULT" className="relative w-96 h-96 object-contain drop-shadow-2xl" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute top-20 right-0 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <LineChart className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Resultados Reais</div>
                    <div className="text-xs text-slate-400">Economia mensurável</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold uppercase tracking-wide text-xs">Custo Invisível</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">O Dinheiro Que Você Deixa na Distribuidora</h2>
            <p className="text-slate-400 text-lg">Sem migração, você continua pagando tarifa máxima. Com MIGREI, você transforma custo fixo em vantagem competitiva.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ icon: DollarSign, title: 'Economia Média', desc: '30-40% a menos por mês' }, { icon: Clock, title: 'Prazos Reais', desc: 'Implementação em 30-60 dias' }, { icon: ShieldCheck, title: 'Compliance', desc: 'Segurança regulatória total' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30" />
                  <div>
                    <div className="text-white font-bold text-sm">{item.title}</div>
                    <div className="text-slate-400 text-xs">{item.desc}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">Plano executável com metas claras e acompanhamento constante.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NovaLeiCTA variant="hero" className="bg-slate-950 border-t border-slate-800" />

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold uppercase tracking-wide text-xs">Consultoria B2B</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 leading-tight">Migre com Segurança, Meça o Resultado</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">Estratégia, execução e governança para reduzir custos e manter compliance. Sem improviso, sem risco, com ROI mensurável.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Plano de Implementação</h4>
                    <p className="text-sm text-slate-400">Roadmap com etapas, responsáveis e metas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-cyan-500/20">
                  <div className="bg-cyan-500/20 p-2 rounded-lg">
                    <LineChart className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Economia Mensurável</h4>
                    <p className="text-sm text-slate-400">KPIs e relatórios com transparência total.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-8">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, label: 'Economia Média', value: '30-40%' },
                  { icon: Clock, label: 'Tempo', value: '30-60 dias' },
                  { icon: Briefcase, label: 'Clientes', value: '500+' },
                  { icon: ShieldCheck, label: 'Compliance', value: '100%' },
                ].map((stat, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/30 hover:bg-slate-800 transition-colors">
                    <stat.icon className="w-10 h-10 mb-4 text-emerald-400" />
                    <div className="text-2xl md:text-3xl font-black mb-1 text-emerald-400">{stat.value}</div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <Link to="/contato" className="w-full inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.05] gap-2">
                  <Briefcase className="w-5 h-5" /> Solicitar Proposta
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full mb-6">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold uppercase tracking-wide">Garantias Reais</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Sem Risco Financeiro Para Começar</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Diagnóstico gratuito, sem compromisso. Só avançamos se a projeção de economia fizer sentido para sua empresa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Diagnóstico gratuito e sem compromisso',
              'Plano de implementação com metas claras',
              'Acompanhamento mensal e KPIs de economia',
              'Compliance garantido e governança',
              'Equipe técnica dedicada ao seu caso',
              'Resultados comunicados com transparência',
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border-2 border-emerald-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Transforme Custo em Vantagem Competitiva</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Comece agora e veja a economia aparecer nos primeiros meses. Nossa equipe conduz cada etapa.</p>
            <Link to="/contato" className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.05] gap-2">
              <Rocket className="w-6 h-6" /> Falar com Especialista
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contratar;

