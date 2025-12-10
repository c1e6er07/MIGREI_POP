import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Network,
  ShieldCheck,
  Database,
  Layers,
  ArrowRight,
  Building2,
  Share2,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  FileText,
  Clock,
  Award,
  Rocket,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';

const Sobre: React.FC = () => {
  const [expandedOrg, setExpandedOrg] = useState<string | null>(null);

  // Pilares da Lei 15.269/2025 relacionados à Comercialização Varejista
  const legalHighlights = [
    {
      icon: FileText,
      title: 'Lei 15.269/2025',
      subtitle: 'Marco Regulatório',
      description:
        'Modernização do setor elétrico com foco na comercialização varejista para consumidores de baixa tensão.',
      color: 'emerald',
    },
    {
      icon: Users,
      title: 'Abertura do Mercado',
      subtitle: 'Democratização Energética',
      description:
        'Cronograma: 24 meses para Grupo A (industrial/comercial) e 36 meses para Grupo B (consumidores residenciais).',
      color: 'orange',
    },
    {
      icon: ShieldCheck,
      title: 'Supridor de Última Instância',
      subtitle: 'Segurança e Continuidade',
      description:
        'Mecanismo de proteção para consumidores, garantindo fornecimento mesmo em caso de falência de operações de comercialização.',
      color: 'indigo',
    },
    {
      icon: Award,
      title: 'Produto Padrão',
      subtitle: 'Transparência Total',
      description:
        'Preço de referência padronizado para facilitar comparação entre ofertas e promover competitividade.',
      color: 'cyan',
    },
  ];

  const organizationalApps = [
    {
      id: 'varejo',
      name: 'Comercialização Varejista',
      subtitle: 'Pioneirismo no Mercado Livre',
      icon: Zap,
      color: 'from-emerald-500 to-cyan-500',
      description:
        'Primeira operação de comercialização varejista do Brasil, habilitada para atender Grupos A e B.',
      features: [
        'Onboarding Digital 100%',
        'Produto Padrão Lei 15.269',
        'Preço de Referência',
        'Portal do Cliente',
      ],
      access: 'Consumidores Industriais, Comerciais e Residenciais',
    },
    {
      id: 'core',
      name: 'MIGREI Core',
      subtitle: 'Tecnologia e IA',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      description:
        'Núcleo central de inteligência artificial, compliance e liquidação financeira CCEE.',
      features: ['AI Central (Gemini 2.5)', 'Integração CCEE', 'Compliance ANEEL', 'Open Finance'],
      access: 'Backoffice + Operações',
    },
    {
      id: 'platform',
      name: 'MIGREI Platform',
      subtitle: 'SaaS para Empresas',
      icon: Network,
      color: 'from-orange-500 to-yellow-500',
      description: 'Plataforma SaaS para gestão de contratos, medição e faturamento de energia.',
      features: ['CRM Avançado', 'Portal do Cliente', 'Analytics BI', 'Integração Distribuidoras'],
      access: 'Clientes Enterprise',
    },
    {
      id: 'compliance',
      name: 'MIGREI Compliance',
      subtitle: 'Regulatório e Riscos',
      icon: ShieldCheck,
      color: 'from-red-500 to-pink-500',
      description: 'Gestão de conformidade regulatória (ANEEL, CCEE, BACEN, LGPD).',
      features: ['Monitoramento ANEEL', 'Gestão Riscos', 'Audit Trail', 'Whistleblower'],
      access: 'Compliance + Legal + Auditoria',
    },
    {
      id: 'marketing',
      name: 'MIGREI Marketing',
      subtitle: 'Growth Engine',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500',
      description: 'Hub de geração de leads, branding, analytics e co-op marketing.',
      features: ['SEO Nacional+Local', 'Paid Ads', 'CRM Integration', 'Multi-touch Attribution'],
      access: 'Marketing Team + Franqueados',
    },
  ];


  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { icon: string; bg: string; border: string; text: string; check: string }
    > = {
      emerald: {
        icon: 'text-emerald-400',
        bg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        check: 'text-emerald-500',
      },
      orange: {
        icon: 'text-orange-400',
        bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        check: 'text-orange-500',
      },
      purple: {
        icon: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        check: 'text-purple-500',
      },
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-hidden">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-transparent opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-950/80 to-yellow-950/80 border-2 border-orange-400/60 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                <Building2 className="w-5 h-5 text-orange-300" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-sm md:text-base font-bold uppercase tracking-wide">
                  Pioneira em Comercialização Varejista
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Quem Somos MIGREI
                </span>
              </h1>
              <p className="text-slate-300 mb-8 text-xl lg:text-2xl leading-relaxed">
                Sua empresa pode reduzir custos de energia em{' '}
                <span className="text-emerald-400 font-bold">30-40%</span> no Mercado Livre de
                Energia. A MIGREI conduz toda a jornada com equipe regulatória, tecnologia e
                execução ponta a ponta.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">30-40%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Economia de Custos
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-1">30-60</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Dias Implementação
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">500+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Empresas Atendidas
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 text-center">
                  <div className="text-3xl font-black text-blue-400 mb-1">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Taxa de Sucesso
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/empresas" className="w-full sm:w-auto">
                  <button className="w-full bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-emerald-700/25 flex items-center justify-center transition-all hover:scale-105">
                    <Rocket className="w-5 h-5 mr-2" /> Ver Nossa Solução
                  </button>
                </Link>
                <a
                  href="https://forms.gle/izq23HmRnSYEFkJ9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-xl shadow-amber-600/25 flex items-center justify-center transition-all hover:scale-105">
                    Agendar Reunião
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center z-0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[500px] h-[500px] border-2 border-dashed border-yellow-500/20 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-dotted border-orange-500/20 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-40" />
                <img
                  src={LOGO_URL}
                  alt="MIGREI MLE CONSULT"
                  className="relative w-96 h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-20 right-0 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                  <div>
                    <div className="text-white font-bold">Mercado em Alta</div>
                    <div className="text-xs text-slate-400">Crescimento exponencial</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="lei-15269"
        className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-2 block">
              Marco Regulatório
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              LEI 15.269 de 24/11/2025
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                COMERCIALIZAÇÃO VAREJISTA
              </span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              A Lei 15.269/2025 moderniza o marco regulatório do setor elétrico e cria o conceito de
              <span className="text-emerald-400 font-bold"> Comercialização Varejista</span>,
              permitindo que
              <span className="text-orange-400 font-bold"> qualquer consumidor</span> possa escolher
              seu fornecedor de energia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {legalHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              const colorClasses = getColorClasses(item.color);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-slate-950 border ${colorClasses.border} rounded-2xl p-6 hover:scale-105 transition-all group`}
                >
                  <div
                    className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`w-7 h-7 ${colorClasses.icon}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colorClasses.text} mb-2`}>{item.title}</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-950 border border-emerald-500/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-emerald-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Cronograma de Abertura do Mercado</h3>
                <p className="text-sm text-slate-400">
                  Redução progressiva dos limites de acesso ao ACL
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-950 border border-orange-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-300">GRUPO A</span>
                  <span className="text-2xl font-black text-orange-400">24 meses</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 w-full"></div>
                </div>
                <p className="text-xs text-slate-400">
                  Consumidores industriais e comerciais atendidos em tensão ≥ 2,3 kV
                </p>
              </div>

              <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-300">GRUPO B</span>
                  <span className="text-2xl font-black text-cyan-400">36 meses</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 w-full"></div>
                </div>
                <p className="text-xs text-slate-400">
                  Consumidores residenciais e pequenos comércios (baixa tensão)
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-emerald-400">Exemplo prático:</strong> Um consumidor
                residencial (Grupo B) poderá escolher entre diferentes operações de comercialização e comparar
                ofertas através de um{' '}
                <span className="text-white font-bold">produto padrão com preço de referência</span>
                , garantindo transparência total e facilitando a tomada de decisão.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2 block">
              Plataforma Integrada
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              ECOSSISTEMA TECNOLÓGICO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                MIGREI
              </span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Não somos apenas uma operação de comercialização. Somos um{' '}
              <span className="text-white font-bold">ecossistema tecnológico completo</span>{' '}
              que conecta inteligência artificial, compliance regulatório e educação para
              democratizar o acesso ao Mercado Livre de Energia.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-bold tracking-widest uppercase text-xs">
                Ecossistema Integrado
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              7 APPS ESPECIALIZADOS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Uma Única Plataforma
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Cada módulo é um sistema completo, porém todos se comunicam em tempo real através de
              APIs REST e eventos assíncronos, garantindo uma experiência fluida e dados sempre
              sincronizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationalApps.map((app, idx) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 h-full transition-all hover:shadow-2xl hover:shadow-orange-500/5">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} p-3 text-white flex items-center justify-center shadow-lg`}
                    >
                      <app.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-2 py-1 rounded">
                      {app.access.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{app.name}</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-3">
                    {app.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{app.description}</p>

                  <div className="space-y-2 mb-4">
                    {app.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedOrg(expandedOrg === app.id ? null : app.id)}
                    className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1"
                  >
                    {expandedOrg === app.id ? 'Ver menos' : 'Ver detalhes'}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${expandedOrg === app.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {expandedOrg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-orange-500/20 rounded-2xl p-8 overflow-hidden"
              >
                {organizationalApps.map((app) => {
                  if (app.id !== expandedOrg) return null;
                  return (
                    <div key={app.id} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} p-4 text-white flex items-center justify-center shadow-lg`}
                        >
                          <app.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                          <p className="text-slate-400">{app.subtitle}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">
                            Funcionalidades Completas
                          </h4>
                          <div className="space-y-2">
                            {app.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 text-sm text-slate-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">
                            Acesso & Permissões
                          </h4>
                          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <p className="text-sm text-slate-400 leading-relaxed">
                              <strong className="text-emerald-400">Níveis de Acesso:</strong>
                              <br />
                              {app.access}
                            </p>
                            <div className="mt-4 pt-4 border-t border-slate-800">
                              <p className="text-xs text-slate-500">
                                Sistema com controle granular de permissões (RBAC) e auditoria
                                completa de acessos via Blockchain.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SEÇÃO: OPORTUNIDADE PARA INVESTIDORES */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-950/80 to-yellow-950/80 border-2 border-orange-400/60 rounded-full mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(234,88,12,0.4)]"
            >
              <Rocket className="w-5 h-5 text-orange-300" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-sm font-bold uppercase tracking-wide">
                Oportunidade Única de Investimento
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                POR QUE INVESTIR
              </span>
              <br />
              <span className="text-white">em Franquias MIGREI?</span>
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              O momento é AGORA. Novo marco regulatório, mercado de R$ 300 bilhões em transformação
              e modelo de negócio validado com ROI comprovado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-500/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mercado em Expansão Acelerada</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <span className="text-emerald-400 font-bold">Lei 15.269/2025</span> abre o Mercado Livre
                para <span className="text-white font-bold">todos os consumidores</span> nos próximos
                24-36 meses. Projeção de{' '}
                <span className="text-yellow-400 font-black">40 milhões de clientes elegíveis</span>.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-[75%] animate-pulse"></div>
                </div>
                <span className="text-emerald-400 font-bold">+300%</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-950 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Timing Perfeito</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Janela única de <span className="text-orange-400 font-bold">24 meses</span> para
                posicionamento antes da saturação. Pioneiros capturam{' '}
                <span className="text-white font-bold">70% do mercado</span> nos primeiros 2 anos.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                <p className="text-xs text-orange-300 font-bold uppercase tracking-wide">
                  🔥 First-mover advantage em seu território
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Modelo Validado com ROI Comprovado</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Operação piloto gerou <span className="text-cyan-400 font-bold">R$ 2,3M de MRR</span>{' '}
                em 18 meses. Payback médio de{' '}
                <span className="text-white font-bold">4-11 meses</span> dependendo do território.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900 rounded-lg p-3 text-center border border-slate-800">
                  <div className="text-2xl font-black text-cyan-400">4-11</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Meses Payback</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 text-center border border-slate-800">
                  <div className="text-2xl font-black text-emerald-400">40%+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Margem Líquida</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-950 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Segurança Regulatória Total</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                MIGREI Core cuida de <span className="text-purple-400 font-bold">100% do compliance</span>{' '}
                (ANEEL, CCEE, BACEN, LGPD). Franqueado foca apenas em{' '}
                <span className="text-white font-bold">vendas e relacionamento</span>.
              </p>
              <div className="space-y-2">
                {['Habilitação CCEE', 'Liquidação Financeira', 'Auditoria Contínua'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-slate-950 border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Tecnologia Proprietária de Ponta</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Plataforma SaaS com <span className="text-indigo-400 font-bold">IA Gemini 2.5</span>{' '}
                integrada, CRM avançado, analytics BI e automação 24/7. Franqueado recebe tudo{' '}
                <span className="text-white font-bold">turnkey</span>.
              </p>
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                <p className="text-xs text-indigo-300 font-bold">
                  🤖 AI Central reduz CAC em 60% e aumenta conversão em 3x
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-slate-950 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500/60 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/30 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Suporte Full e Playbook Completo</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Da habilitação à operação contínua: treinamentos, marketing co-op, CRM configurado,
                scripts de vendas e{' '}
                <span className="text-yellow-400 font-bold">gerente dedicado 24/7</span>.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {['Treinamento', 'Marketing', 'CRM'].map((tag, i) => (
                  <div
                    key={i}
                    className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-2 py-1 text-center"
                  >
                    <span className="text-[10px] text-yellow-300 font-bold uppercase">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-orange-500/40 rounded-3xl p-12 text-center shadow-[0_0_60px_rgba(249,115,22,0.2)]"
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Investimento a partir de R$ 45.000
                  </span>
                </h3>
                <p className="text-slate-300 text-lg">
                  3 modelos de franquia (City, State, Region) com diferentes níveis de investimento
                  e potencial de retorno. Escolha o território ideal para você.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-6">
                  <div className="text-4xl font-black text-emerald-400 mb-2">R$ 45k</div>
                  <div className="text-sm text-slate-400 mb-3">Franquia City</div>
                  <div className="text-xs text-slate-500">Território: 1 cidade</div>
                </div>
                <div className="bg-slate-950 border border-orange-500/30 rounded-xl p-6 scale-105">
                  <div className="text-4xl font-black text-orange-400 mb-2">R$ 180k</div>
                  <div className="text-sm text-slate-400 mb-3">Franquia State</div>
                  <div className="text-xs text-slate-500">Território: Estado inteiro</div>
                </div>
                <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-6">
                  <div className="text-4xl font-black text-cyan-400 mb-2">R$ 500k</div>
                  <div className="text-sm text-slate-400 mb-3">Franquia Region</div>
                  <div className="text-xs text-slate-500">Território: Região (ex.: Sul)</div>
                </div>
              </div>

              <Link to="/franquia" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:from-yellow-400 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-xl px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all flex items-center gap-3 mx-auto"
                >
                  <Rocket className="w-6 h-6" />
                  Conhecer Modelos de Franquia
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>

              <p className="text-xs text-slate-500 max-w-xl mx-auto">
                Agende uma reunião com nosso time de expansão para entender qual modelo se encaixa
                melhor no seu perfil e região de atuação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {' '}
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                {' '}
                Tecnologia{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Multi-Tenant
                </span>{' '}
                e Segurança Militar{' '}
              </h2>{' '}
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {' '}
                Nossa plataforma opera como um &quot;Edifício Digital&quot;. Cada cliente possui sua
                sala segura (Tenant), isolada por criptografia RLS (Row Level Security), mas todos
                se beneficiam da infraestrutura compartilhada de alta performance.{' '}
              </p>{' '}
              <ul className="space-y-6">
                {' '}
                <li className="flex gap-4 group">
                  {' '}
                  <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-emerald-500/50 rounded-lg h-fit transition-colors">
                    <Database className="w-6 h-6 text-emerald-500" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">
                      Banco de Dados Unificado
                    </h4>{' '}
                    <p className="text-slate-400 text-sm">
                      Dados fluem em tempo real entre Consultores, Partners e Core, permitindo
                      auditoria instantânea.
                    </p>{' '}
                  </div>{' '}
                </li>{' '}
                <li className="flex gap-4 group">
                  {' '}
                  <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-yellow-500/50 rounded-lg h-fit transition-colors">
                    <Share2 className="w-6 h-6 text-yellow-500" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h4 className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors">
                      Repartição Automática
                    </h4>{' '}
                    <p className="text-slate-400 text-sm">
                      O sistema de pagamento reconhece a estrutura de parceiros e divide as receitas
                      automaticamente.
                    </p>{' '}
                  </div>{' '}
                </li>{' '}
                <li className="flex gap-4 group">
                  {' '}
                  <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-indigo-500/50 rounded-lg h-fit transition-colors">
                    <Layers className="w-6 h-6 text-indigo-500" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h4 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">
                      Inteligência Artificial Nativa
                    </h4>{' '}
                    <p className="text-slate-400 text-sm">
                      A Migrei IA não é um plugin. Ela é o núcleo que analisa contratos e faturas
                      24/7.
                    </p>{' '}
                  </div>{' '}
                </li>{' '}
              </ul>{' '}
            </div>
            <div className="relative">
              {' '}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-full blur-[100px]"></div>{' '}
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
                {' '}
                <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                  {' '}
                  <div className="flex items-center gap-3">
                    {' '}
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>{' '}
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>{' '}
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>{' '}
                  </div>{' '}
                  <div className="text-xs font-mono text-slate-500">SYSTEM_STATUS: ONLINE</div>{' '}
                </div>{' '}
                <div className="space-y-4 font-mono text-sm">
                  {' '}
                  <div className="flex justify-between">
                    {' '}
                    <span className="text-slate-400">Core.AI.Model</span>{' '}
                    <span className="text-emerald-400">Gemini 2.5 Flash</span>{' '}
                  </div>{' '}
                  <div className="flex justify-between">
                    {' '}
                    <span className="text-slate-400">Bank.Gateway</span>{' '}
                    <span className="text-emerald-400">PIX e Cartão</span>{' '}
                  </div>{' '}
                  <div className="flex justify-between">
                    {' '}
                    <span className="text-slate-400">Security.Protocol</span>{' '}
                    <span className="text-emerald-400">TLS 1.3 / OAuth2</span>{' '}
                  </div>{' '}
                  <div className="flex justify-between">
                    {' '}
                    <span className="text-slate-400">Database.RLS</span>{' '}
                    <span className="text-emerald-400">Active (Multi-Tenant)</span>{' '}
                  </div>{' '}
                  <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-500 leading-relaxed">
                    {`> Initializing Neural Network... OK`}
                    <br />
                    {`> Connecting to Energy Distributors... OK`}
                    <br />
                    {`> Smart Split Engine... READY`}
                    <br />{' '}
                    <span className="text-emerald-500 animate-pulse">
                      _ System Fully Operational
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-6xl font-display font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400">
            {' '}
            Energia Livre para Todos.{' '}
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {' '}
            Nossa missão é usar tecnologia de ponta para libertar empresas brasileiras dos custos
            abusivos de energia, criando riqueza compartilhada através da nossa rede de
            parceiros.{' '}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {' '}
            <Link to="/empresas">
              {' '}
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                {' '}
                <Network className="w-5 h-5 text-white" /> Transformar Sua Empresa{' '}
              </button>{' '}
            </Link>{' '}
            <Link to="/contato">
              {' '}
              <button className="px-10 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 hover:from-amber-400 hover:via-orange-400 hover:to-yellow-300 text-slate-950 font-black rounded-xl shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                {' '}
                Falar com a MIGREI <ArrowRight className="w-4 h-4" />{' '}
              </button>{' '}
            </Link>{' '}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sobre;
