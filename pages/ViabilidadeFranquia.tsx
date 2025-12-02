import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, MapPin, CheckCircle2, Briefcase, ArrowRight, Target, BarChart3, Rocket, Shield, Scale, FileCheck, Lock, Award, AlertCircle, Building, Check, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
const ViabilidadeFranquia: React.FC = () => {
  const [clientes, setClientes] = useState(10);
  const [consumoMedio, setConsumoMedio] = useState(15000); 
  const COMISSAO_PERCENTUAL = 0.02; 
  const TARIFA_MEDIA = 0.65; 
  const faturamentoEnergia = clientes * consumoMedio * TARIFA_MEDIA;
  const receitaMensal = faturamentoEnergia * COMISSAO_PERCENTUAL;
  const receitaAnual = receitaMensal * 12;
  const formatMoney = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <section className="relative py-24 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8"> <Rocket className="w-4 h-4 text-orange-400" /> <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">Seja um Partner</span> </motion.div>
               <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-tight"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">PARTNER ESTRATÉGICO</span> <br/> EM GESTÃO ENERGÉTICA </h1>
               <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"> Integre-se à rede MIGREI. Oferecemos a solidez jurídica, a tecnologia de ponta e a marca consolidada para você construir uma operação de receita recorrente no Mercado Livre de Energia. </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button onClick={() => document.getElementById('simulador')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-105"> Simular Rentabilidade </button> <button onClick={() => document.getElementById('candidatura')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-white text-white font-bold rounded-xl transition-all"> Aplicar para a Rede </button> </div>
            </div>
         </div>
      </section>
      <section className="py-24 bg-slate-900 border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
               <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative group overflow-hidden"> <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div> <Target className="w-10 h-10 text-orange-500 mb-6" /> <h3 className="text-xl font-bold text-white mb-3">Recorrência Garantida</h3> <p className="text-slate-400 leading-relaxed"> Modelo de negócio baseado em contratos de longo prazo (méd. 5 anos). Você recebe royalties mensais sobre o consumo de energia da sua carteira. </p> </div>
               <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative group overflow-hidden"> <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div> <Briefcase className="w-10 h-10 text-yellow-500 mb-6" /> <h3 className="text-xl font-bold text-white mb-3">Segurança Operacional</h3> <p className="text-slate-400 leading-relaxed"> Estrutura Home Based com suporte total da Matriz. Não exige estoque ou passivo trabalhista elevado. Foco 100% no relacionamento B2B. </p> </div>
               <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative group overflow-hidden"> <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div> <TrendingUp className="w-10 h-10 text-emerald-500 mb-6" /> <h3 className="text-xl font-bold text-white mb-3">Ecossistema Tech</h3> <p className="text-slate-400 leading-relaxed"> Acesso imediato ao MIGREI Bank (Smart Split), CRM exclusivo e Migrei IA para suporte técnico 24/7. Sua franquia já nasce digital. </p> </div>
            </div>
         </div>
      </section>
      <section id="simulador" className="py-24 relative">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
               <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                     <h2 className="text-3xl font-display font-bold text-white mb-2">Simulador de Lucratividade</h2>
                     <p className="text-slate-400 mb-10">Projeção de receita recorrente baseada na construção de carteira.</p>
                     <div className="space-y-8"> <div> <label className="flex justify-between text-sm font-bold text-slate-300 mb-4"> <span>Clientes na Carteira</span> <span className="text-orange-400 text-lg">{clientes} empresas</span> </label> <input type="range" min="5" max="100" step="1" value={clientes} onChange={(e) => setClientes(Number(e.target.value))} className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" /> </div> <div> <label className="flex justify-between text-sm font-bold text-slate-300 mb-4"> <span>Consumo Médio por Cliente</span> <span className="text-orange-400 text-lg">{consumoMedio.toLocaleString()} kWh</span> </label> <input type="range" min="5000" max="50000" step="1000" value={consumoMedio} onChange={(e) => setConsumoMedio(Number(e.target.value))} className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" /> <p className="text-xs text-slate-500 mt-2">Ex: Pequena indústria ~10k kWh | Média indústria ~30k kWh</p> </div> </div>
                  </div>
                  <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 flex flex-col justify-center relative">
                     <div className="absolute top-4 right-4 p-2 bg-slate-900 rounded-lg border border-slate-800"> <BarChart3 className="w-5 h-5 text-emerald-500" /> </div>
                     <div className="mb-8 text-center"> <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Receita Mensal Estimada</p> <motion.div key={receitaMensal} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl font-black text-white"> {formatMoney(receitaMensal)} </motion.div> </div>
                     <div className="space-y-4 border-t border-slate-800 pt-6"> <div className="flex justify-between items-center text-sm"> <span className="text-slate-400">Receita Anual Projetada</span> <span className="text-emerald-400 font-bold">{formatMoney(receitaAnual)}</span> </div> <div className="flex justify-between items-center text-sm"> <span className="text-slate-400">Volume de Energia Gerido</span> <span className="text-white font-bold">{(clientes * consumoMedio).toLocaleString()} kWh/mês</span> </div> </div>
                     <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-center"> <p className="text-xs text-orange-400 font-bold"> *Valores estimados baseados em comissões médias de mercado. Não constituem promessa de ganho. </p> </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Viabilidade Jurídica e Compliance Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Segurança Jurídica</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Viabilidade Jurídica
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">e Compliance</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Investir na rede MIGREI significa contar com uma base sólida de proteção de marca, compliance regulatório e tecnologia proprietária. Cada componente foi estruturado para mitigar riscos e maximizar a confiabilidade operacional.
            </p>
          </div>

          {/* Main Protection Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 p-4 text-blue-400 flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Proteção da Marca (INPI)</h3>
                <p className="text-sm text-blue-400 font-bold uppercase tracking-wide mb-4">Registro Fundamental</p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Registro estratégico antes do lançamento nacional, garantindo exclusividade territorial e blindagem contra uso indevido da marca MIGREI.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Prazo de Conclusão</span>
                    <span className="text-white font-bold">12-18 meses</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Investimento Total</span>
                    <span className="text-emerald-400 font-bold">R$ 25k - 35k</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Processo em andamento. Partners operam sob licença provisória até conclusão.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 p-4 text-purple-400 flex items-center justify-center mb-6">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Gestão Regulatória</h3>
                <p className="text-sm text-purple-400 font-bold uppercase tracking-wide mb-4">Legal & Compliance</p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Alocação dedicada para monitoramento ativo das regulações ANEEL, CCEE e Open Finance Brasil, assegurando conformidade total.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Monitoramento</span>
                    <span className="text-white font-bold">Contínuo 24/7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Budget Anual (Seed)</span>
                    <span className="text-emerald-400 font-bold">R$ 300k (12%)</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Equipe jurídica especializada em energia e franquias, com relatórios mensais.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-8 h-full transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 p-4 text-indigo-400 flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Tecnologia Proprietária</h3>
                <p className="text-sm text-indigo-400 font-bold uppercase tracking-wide mb-4">LGPD Compliant</p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Plataforma digital completa com CRM, simulador energético e app mobile. Arquitetura multi-tenant com criptografia RLS.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>CRM exclusivo para gestão de leads</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Simulador de viabilidade automatizado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>App mobile para parceiros</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <Shield className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Infraestrutura Supabase com certificação SOC 2 Type II e ISO 27001.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* INPI Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">Classes Prioritárias de Registro (INPI)</h3>
                <p className="text-sm text-slate-400">Cobertura abrangente para proteção integral do modelo de negócio</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-black text-lg">35</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">CLASSE 35</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Core Business</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Serviços de <strong className="text-white">Consultoria Empresarial</strong> e <strong className="text-white">Franquia</strong>. Protege o modelo de negócio e a operação comercial.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-black text-lg">36</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">CLASSE 36</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Fintech</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-white">Serviços Financeiros</strong>, análise de viabilidade econômica e MIGREI Bank. Fundamental para Open Finance.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <span className="text-indigo-400 font-black text-lg">41</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">CLASSE 41</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Educação</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-white">Educação e Treinamento</strong> sobre o Mercado Livre de Energia. Garante exclusividade nos cursos MIGREI Instituto.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-blue-400">Estratégia Legal:</strong> Registro multi-classe garante proteção 360° contra concorrência predatória e uso indevido. 
                  Partners operam com segurança jurídica plena, respaldados por contratos validados por escritório especializado em franchising.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bridge Analogy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-orange-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 flex items-center justify-center">
                  <Building className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">A Viabilidade como Construção de uma Ponte</h3>
                  <p className="text-sm text-slate-400">Analogia estratégica do modelo de expansão</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">1</span>
                      <h4 className="text-lg font-bold text-white">O Rio</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      O <strong className="text-white">momento de expansão do MLE</strong> (crescimento de 262%) é o rio largo que precisa ser cruzado. 
                      Uma oportunidade histórica que exige velocidade e presença nacional.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">2</span>
                      <h4 className="text-lg font-bold text-white">A Estrutura</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      O <strong className="text-white">modelo de franquia</strong>, com tecnologia proprietária e suporte integral, é a estrutura modular e replicável. 
                      Permite construir rapidamente em múltiplos pontos do país.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent rounded-full"></div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">3</span>
                      <h4 className="text-lg font-bold text-white">Os Alicerces</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      A <strong className="text-white">viabilidade jurídica</strong> (registro INPI, compliance CCEE/ANEEL) representa os alicerces. 
                      Garantem segurança estrutural e longevidade da operação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <ChevronRight className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-2">Conclusão Estratégica</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Assim como uma ponte não é apenas concreto, mas um sistema integrado de engenharia, fundações e segurança, 
                        <strong className="text-emerald-400"> a franquia MIGREI não é apenas um contrato comercial</strong>. 
                        É um ecossistema jurídico-tecnológico-financeiro projetado para <strong className="text-white">mitigar riscos, escalar com previsibilidade e gerar valor recorrente</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="candidatura" className="py-24 bg-slate-900 border-t border-slate-800">
         <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12"> <h2 className="text-3xl font-bold text-white mb-4">Inicie seu Processo de Aplicação</h2> <p className="text-slate-400">Preencha os dados abaixo. Nossa equipe de Compliance e Expansão analisará seu perfil corporativo.</p> </div>
            <form className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
               <div className="grid md:grid-cols-2 gap-6"> <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Nome Completo</label> <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none" placeholder="Seu nome" /> </div> <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">WhatsApp Comercial</label> <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none" placeholder="(00) 00000-0000" /> </div> </div>
               <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Email Corporativo</label> <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none" placeholder="seu@email.com" /> </div>
               <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Região de Interesse (Cidade/Estado)</label> <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none" placeholder="Ex: Campinas, SP" /> </div>
               <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Capacidade de Investimento</label> <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none"> <option>Entre R$ 80k e R$ 100k</option> <option>Entre R$ 100k e R$ 150k</option> <option>Acima de R$ 150k</option> </select> </div>
               <div className="space-y-2"> <label className="text-sm font-bold text-slate-300">Perfil Profissional (Resumo)</label> <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none h-32" placeholder="Descreva sua experiência comercial e por que deseja ser um Partner MIGREI..."></textarea> </div>
               <button type="button" onClick={() => alert("Candidatura enviada com sucesso! Nossa equipe entrará em contato.")} className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.01]"> Enviar Aplicação para Análise </button>
               <p className="text-xs text-center text-slate-500 mt-4"> Seus dados estão protegidos. A aplicação não gera vínculo contratual imediato. </p>
            </form>
         </div>
      </section>
    </div>
  );
};
export default ViabilidadeFranquia;