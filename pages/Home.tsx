import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Building2, Briefcase, TrendingUp, Cpu, Wallet, ChevronRight, Globe, GraduationCap, BookOpen, Megaphone, Scale, Headphones, CheckCircle, Award, LineChart, Clock, Target, Percent, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
const Home: React.FC = () => {
  const b2bServices = [ { icon: GraduationCap, title: "Diagnóstico Energético", description: "Análise completa de oportunidades de economia", items: ["Auditoria de contas", "Identificação de saídas regulatórias", "Projeção de economias", "Roadmap estratégico"] }, { icon: BookOpen, title: "Consultoria Regulatória", description: "Especialistas em mercado livre de energia", items: ["Orientação em migrações", "Análise de fornecedores", "Gestão de contratos", "Compliance regulatório"] }, { icon: Megaphone, title: "Implementação", description: "Execução de estratégias energéticas", items: ["Setup de operação", "Integração com fornecedores", "Treinamento de equipes", "Monitoramento contínuo"] }, { icon: Scale, title: "Suporte Jurídico", description: "Apoio legal especializado", items: ["Revisão de contratos", "Parecer legal", "Documentação", "Compliance"] }, { icon: Cpu, title: "Plataforma Tecnológica", description: "Sistema integrado de gestão", items: ["Migrei IA", "Dashboard analytics", "Integração APIs", "Mobile app"] }, { icon: Headphones, title: "Suporte Dedicado", description: "Time exclusivo para sua empresa", items: ["Account manager", "Suporte 24/7", "Reuniões estratégicas", "Otimização contínua"] } ];
  const solutionMetrics = [ { icon: DollarSign, title: "Economia Média", value: "30% - 40%", description: "Redução de custos de energia", color: "yellow" }, { icon: LineChart, title: "Tempo de Implementação", value: "30 - 60 dias", description: "Desde análise até operação", color: "orange" }, { icon: TrendingUp, title: "ROI", value: "8 - 12 meses", description: "Retorno do investimento em consultoria", color: "amber" }, { icon: Clock, title: "Suporte Contínuo", value: "24/7", description: "Acompanhamento permanente", color: "yellow" }, { icon: Target, title: "Empresas Atendidas", value: "500+", description: "Clientes satisfeitos no Brasil", color: "orange" }, { icon: Percent, title: "Taxa de Sucesso", value: "98%", description: "Migrações bem-sucedidas", color: "amber" } ];
  return (
    <div className="overflow-hidden bg-slate-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0"> <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse" /> <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" /> <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" /> </div>
        <div className="absolute inset-0 opacity-10"> <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, rgb(234, 179, 8, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgb(234, 179, 8, 0.3) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} /> </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-950/80 to-yellow-950/80 border-2 border-orange-400/60 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,88,12,0.4)]"> <Building2 className="w-5 h-5 text-orange-300" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-sm md:text-base font-bold uppercase tracking-wide">Pioneira em Comercialização Varejista</span> </div>
                <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white leading-tight"> <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Economize em Energia</span> </h1>
                <p className="text-slate-300 mb-8 text-xl lg:text-2xl leading-relaxed"> Sua empresa pode reduzir custos de energia em <span className="text-emerald-400 font-bold">30-40%</span> no Mercado Livre de Energia. MIGREI faz isso acontecer. </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center"> <div className="text-3xl font-black text-emerald-400 mb-1">30-40%</div> <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Economia de Custos</div> </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 text-center"> <div className="text-3xl font-black text-cyan-400 mb-1">30-60</div> <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Dias Implementação</div> </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center"> <div className="text-3xl font-black text-emerald-400 mb-1">500+</div> <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Empresas Atendidas</div> </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 text-center"> <div className="text-3xl font-black text-blue-400 mb-1">98%</div> <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Taxa de Sucesso</div> </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4"> <Link to="/empresas" className="w-full sm:w-auto"> <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center transition-all hover:scale-105"> <Rocket className="w-5 h-5 mr-2" /> Ver Nossa Solução </button> </Link> <a href="https://forms.gle/izq23HmRnSYEFkJ9A" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> <button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-xl shadow-slate-500/20 flex items-center justify-center transition-all hover:scale-105"> Agendar Reunião </button> </a> </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center z-0">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center"> <div className="w-[500px] h-[500px] border-2 border-dashed border-yellow-500/20 rounded-full" /> <div className="absolute w-[400px] h-[400px] border border-dotted border-orange-500/20 rounded-full" /> </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10"> <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-40" /> <img src={LOGO_URL} alt="MIGREI MLE CONSULT" className="relative w-96 h-96 object-contain drop-shadow-2xl" /> </motion.div>
                <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-20 right-0 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30 shadow-xl"> <div className="flex items-center gap-3"> <TrendingUp className="w-8 h-8 text-yellow-400" /> <div> <div className="text-white font-bold">Mercado em Alta</div> <div className="text-xs text-slate-400">Crescimento exponencial</div> </div> </div> </motion.div>
            </motion.div>
            </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"> <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-2 block">Por Que MIGREI</span> <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6"> Consultoria que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">gera resultados comprovados</span> </h2> <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div> </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="relative group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-500"> <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div> <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-emerald-500/50 shadow-lg shadow-emerald-500/10"> <TrendingUp className="w-7 h-7 text-emerald-400" /> </div> <h3 className="text-2xl font-bold text-white mb-2">Expertise Comprovada</h3> <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">500+</div> <p className="text-slate-400 leading-relaxed text-sm">Empresas atendidas com sucesso desde 2022. Especialistas certificados no Mercado Livre de Energia.</p> </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -10 }} className="relative group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500"> <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div> <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-cyan-500/50 shadow-lg shadow-cyan-500/10"> <Cpu className="w-7 h-7 text-cyan-400" /> </div> <h3 className="text-2xl font-bold text-white mb-2">Tecnologia Proprietária</h3> <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">100%</div> <p className="text-slate-400 leading-relaxed text-sm">Plataforma integrada com IA, análise de dados e simuladores. Tudo que você precisa em um único lugar.</p> </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }} className="relative group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500"> <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div> <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-blue-500/50 shadow-lg shadow-blue-500/10"> <Wallet className="w-7 h-7 text-blue-400" /> </div> <h3 className="text-2xl font-bold text-white mb-2">ROI Garantido</h3> <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">8-12m</div> <p className="text-slate-400 leading-relaxed text-sm">Retorno do investimento em consultoria. Economia média de 30-40% em seus custos de energia.</p> </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
                <Link to="/empresas" className="inline-flex items-center group relative"> <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition-opacity animate-pulse"></div> <button className="relative px-8 py-4 bg-slate-950 border border-emerald-500/50 rounded-lg text-white font-bold text-lg flex items-center gap-3 transition-transform group-hover:scale-[1.02]"> <Briefcase className="w-5 h-5 text-emerald-400" /> Explorar Soluções <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" /> </button> </Link>
                <div className="mt-8 flex items-center justify-center"> <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]"> <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span className="text-slate-300 text-sm font-medium"> Diagnostico <span className="text-emerald-400 font-bold">Gratuito</span> para sua Empresa </span> </div> </div>
            </motion.div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}> <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6"> <Zap className="w-4 h-4 text-emerald-400" /> <span className="text-emerald-400 font-semibold uppercase tracking-wide text-xs">Consultoria B2B</span> </div> <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 leading-tight"> O Mercado Livre de Energia é uma <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Oportunidade Silenciosa</span> </h2> <p className="text-lg text-slate-400 mb-8 leading-relaxed"> Milhões de empresas ainda não sabem que podem reduzir drasticamente seus custos de energia. Esse é o seu diferencial competitivo. </p> <div className="space-y-4"> <div className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20"> <div className="bg-emerald-500/20 p-2 rounded-lg"> <Globe className="w-5 h-5 text-emerald-400" /> </div> <div> <h4 className="font-bold text-white">Mercado em Expansão</h4> <p className="text-sm text-slate-400">Governo amplificando acesso de PMEs ao mercado livre de forma progressiva.</p> </div> </div> <div className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-cyan-500/20"> <div className="bg-cyan-500/20 p-2 rounded-lg"> <TrendingUp className="w-5 h-5 text-cyan-400" /> </div> <div> <h4 className="font-bold text-white">Crescimento Consistente</h4> <p className="text-sm text-slate-400">Setor cresce mais de 20% ao ano. Tendência irreversível de descentralização.</p> </div> </div> </div> </motion.div>
            <div className="flex flex-col gap-8">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6"> {solutionMetrics.map((stat, index) => ( <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border ${ stat.color === 'yellow' ? 'border-emerald-500/30' : stat.color === 'orange' ? 'border-cyan-500/30' : 'border-blue-500/30' } hover:bg-slate-800 transition-colors`}> <stat.icon className={`w-10 h-10 mb-4 ${ stat.color === 'yellow' ? 'text-emerald-400' : stat.color === 'orange' ? 'text-cyan-400' : 'text-blue-400' }`} /> <div className={`text-2xl md:text-3xl font-black mb-1 ${ stat.color === 'yellow' ? 'text-emerald-400' : stat.color === 'orange' ? 'text-cyan-400' : 'text-blue-400' }`}>{stat.value}</div> <div className="text-sm text-slate-400 font-bold uppercase tracking-wide">{stat.title}</div> </motion.div> ))} </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}> <Link to="/contato" className="w-full inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.05] gap-2"> <Briefcase className="w-5 h-5" /> Agende uma Consulta Gratuita </Link> </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full mb-6">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold uppercase tracking-wide">Serviços Completos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Tudo Que Sua Empresa <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Precisa Para Economizar</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Consultoria integrada, tecnologia proprietária e suporte dedicado para sua migração no Mercado Livre de Energia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {b2bServices.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all group hover:bg-slate-800"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                <p className="text-slate-400 mb-5 text-sm leading-relaxed">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Nova seção de valor e CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border-2 border-emerald-500/30 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Transformar Esses Serviços em Economia Real</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Não é só consultoria. É um <span className="text-emerald-400 font-bold">sistema completo</span> que gera economia de <span className="text-emerald-400 font-bold">30-40%</span> desde o primeiro mês. Sem risco. Sem investimento inicial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950/50 rounded-xl p-4 border border-emerald-500/20">
                <div className="text-3xl font-black text-emerald-400 mb-1">500+</div>
                <div className="text-sm text-slate-400">Empresas Transformadas</div>
                <div className="text-xs text-slate-500 mt-2">Desde 2022</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 border border-cyan-500/20">
                <div className="text-3xl font-black text-cyan-400 mb-1">98%</div>
                <div className="text-sm text-slate-400">Taxa de Sucesso</div>
                <div className="text-xs text-slate-500 mt-2">Migrações bem-sucedidas</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 border border-blue-500/20">
                <div className="text-3xl font-black text-blue-400 mb-1">R$ 10M+</div>
                <div className="text-sm text-slate-400">Economia Gerada</div>
                <div className="text-xs text-slate-500 mt-2">Para nossos clientes</div>
              </div>
            </div>

            <Link to="/empresas" className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.05] gap-2">
              <Rocket className="w-6 h-6" />
              Descobrir Meu Potencial de Economia
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold uppercase tracking-wide">Investimento Inteligente</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Por Que Vale a Pena <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Investir em Consultoria</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Seus custos de energia diminuem, sua taxa de retorno é garantida e você ganha um parceiro estratégico no Mercado Livre de Energia.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Coluna esquerda - Métricas */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border-2 ${
                    item.color === 'yellow'
                      ? 'border-emerald-500/30 hover:border-emerald-500/60'
                      : item.color === 'orange'
                      ? 'border-cyan-500/30 hover:border-cyan-500/60'
                      : 'border-blue-500/30 hover:border-blue-500/60'
                  } hover:bg-slate-900/80 transition-all group`}
                >
                  <item.icon
                    className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform ${
                      item.color === 'yellow'
                        ? 'text-emerald-400'
                        : item.color === 'orange'
                        ? 'text-cyan-400'
                        : 'text-blue-400'
                    }`}
                  />
                  <h3 className="text-lg font-semibold text-slate-300 mb-2">{item.title}</h3>
                  <p
                    className={`text-4xl font-black mb-2 ${
                      item.color === 'yellow'
                        ? 'text-emerald-400'
                        : item.color === 'orange'
                        ? 'text-cyan-400'
                        : 'text-blue-400'
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Coluna direita - Proposta de Valor */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 border-2 border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">O Seu Retorno Será:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">30-40% de economia</div>
                      <div className="text-sm text-slate-400">Redução imediata na conta de energia</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">8-12 meses de ROI</div>
                      <div className="text-sm text-slate-400">Retorno 100% do investimento em consultoria</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Economia permanente</div>
                      <div className="text-sm text-slate-400">Ganho contínuo enquanto ficar no mercado livre</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Sem risco financeiro</div>
                      <div className="text-sm text-slate-400">Diagnóstico gratuito e sem compromisso</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border-2 border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Números Reais de 500+ Clientes</h4>
                    <p className="text-sm text-slate-300">
                      Economia média: <span className="font-bold text-yellow-400">R$ 150k/ano</span> por empresa. Alguns chegam a <span className="font-bold text-yellow-400">R$ 500k+/ano</span>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparativo visual */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 mb-16 backdrop-blur-sm">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                Veja a Diferença Entre <span className="text-red-400">Fazer Sozinho</span> vs. <span className="text-emerald-400">Ter a MIGREI</span>
              </h3>
              <p className="text-slate-400">Compare os resultados e decida o melhor caminho para sua empresa</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-red-500/50 rounded-full"></div>
                  <h4 className="font-bold text-white text-lg">Sem Consultoria</h4>
                </div>
                <div className="space-y-3">
                  <div className="text-slate-400">❌ Continua na distribuidora</div>
                  <div className="text-slate-400">❌ Pagando tarifa máxima</div>
                  <div className="text-slate-400">❌ Sem visibilidade de economias</div>
                  <div className="text-slate-400">❌ Risco de desconformidade regulatória</div>
                  <div className="text-slate-400">❌ Desperdício de oportunidade</div>
                  <div className="text-2xl font-black text-slate-400 mt-6">Custo: R$ 0</div>
                  <div className="text-sm text-red-400">Economia: R$ 0</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg shadow-emerald-500/50">✨ RECOMENDADO</div>
                </div>
                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <h4 className="font-bold text-white text-lg">Com MIGREI</h4>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="text-emerald-300">✓ Migração para Mercado Livre</div>
                    <div className="text-emerald-300">✓ Redução de 30-40% na conta</div>
                    <div className="text-emerald-300">✓ Economia real e mensurável</div>
                    <div className="text-emerald-300">✓ Compliance total garantido</div>
                    <div className="text-emerald-300">✓ Oportunidade aproveitada</div>
                    <div className="text-2xl font-black text-emerald-400 mt-6">Investimento: R$ 2.990-5.990/mês</div>
                    <div className="text-xl font-bold text-emerald-400">ROI: 8-12 meses</div>
                    <div className="text-sm text-emerald-300 mt-2">Economia contínua por anos</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA final - Grande e persuasivo */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <div className="mb-8">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Próximo passo</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Descubra Quanto Você Pode <span className="text-emerald-400">Economizar</span>
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Nosso diagnóstico é <span className="font-bold text-emerald-400">100% gratuito e sem compromisso</span>. Em 48 horas você terá a análise completa.
              </p>
            </div>

            <Link to="/empresas" className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.08] gap-3 group">
              <Rocket className="w-7 h-7 group-hover:rotate-45 transition-transform" />
              Fechar Minha Consultoria Agora
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="mt-6 text-sm text-slate-500">
              * Sem cartão de crédito. Sem dados de pagamento. Só sua análise de economia.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Home;