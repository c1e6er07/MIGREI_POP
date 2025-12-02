import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, Network, Zap, ShieldCheck, Database, Layers, ArrowRight, Box, Map, Building2, Share2, GraduationCap, Scale, Landmark, TrendingUp, Users, DollarSign, Award, Target, Briefcase, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
const Sobre: React.FC = () => {
  const [expandedOrg, setExpandedOrg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'structure' | 'pricing' | 'apps'>('structure');

  const organizationalApps = [
    {
      id: 'franqueadora',
      name: 'MIGREI Franqueadora',
      subtitle: 'O Cérebro da Operação',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      description: 'Núcleo central de governança, AI, compliance e liquidação financeira.',
      features: ['Governance Engine', 'AI Central (Gemini 2.5)', 'Financial Hub', 'Compliance Core'],
      access: 'C-Level, Board, Legal, Finance'
    },
    {
      id: 'franquias',
      name: 'MIGREI Franquias',
      subtitle: 'Rede Multi-Tenant',
      icon: Network,
      color: 'from-emerald-500 to-cyan-500',
      description: 'Plataforma SaaS personalizada por hierarquia (Region, State, City).',
      features: ['CRM Avançado', 'Portal do Cliente', 'Analytics BI', 'Smart Split Integration'],
      access: 'Todos os franqueados (RLS by tier)'
    },
    {
      id: 'instituto',
      name: 'Instituto MIGREI',
      subtitle: 'Learning & Certification',
      icon: GraduationCap,
      color: 'from-orange-500 to-yellow-500',
      description: 'LMS completo com gamificação, certificações e reciclagens contínuas.',
      features: ['Onboarding 40-120h', 'Cursos Técnicos', 'Certificações', 'Gamificação'],
      access: 'Franqueados + Colaboradores'
    },
    {
      id: 'compliance',
      name: 'MIGREI Compliance',
      subtitle: 'GRC Platform',
      icon: ShieldCheck,
      color: 'from-red-500 to-pink-500',
      description: 'Plataforma de gestão de riscos e conformidade regulatória (ANEEL, BACEN, LGPD).',
      features: ['Regulatory Monitoring', 'Risk Matrix', 'Audit Trail Blockchain', 'Whistleblower'],
      access: 'Compliance Officer, Legal, Auditors'
    },
    {
      id: 'juridico',
      name: 'MIGREI Jurídico',
      subtitle: 'Legal Tech',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      description: 'Gestão de contratos, litígios, propriedade intelectual e consultoria jurídica.',
      features: ['50+ Templates', 'E-Signature', 'Case Management', 'Advisory On-Demand'],
      access: 'Legal Team + Network de Escritórios'
    },
    {
      id: 'bank',
      name: 'MIGREI Bank',
      subtitle: 'Fintech Completa',
      icon: Landmark,
      color: 'from-emerald-500 to-teal-500',
      description: 'Instituição de Pagamento com Open Finance, crédito, investimentos e cartões.',
      features: ['Open Finance', 'Linha de Crédito', 'CDB/LCI', 'Cartão Corporativo'],
      access: 'Todos os stakeholders'
    },
    {
      id: 'marketing',
      name: 'MIGREI Marketing',
      subtitle: 'Growth Engine',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500',
      description: 'Hub de geração de leads, branding, analytics e co-op marketing.',
      features: ['SEO Nacional+Local', 'Paid Ads', 'CRM Integration', 'Multi-touch Attribution'],
      access: 'Marketing Team + Franqueados'
    }
  ];

  const pricingTiers = [
    {
      tier: 'City',
      label: 'Franquia City',
      subtitle: 'Base Operacional',
      investment: 'R$ 45.000',
      royalty: '8%',
      launchPromo: '6% (3 meses)',
      icon: Building2,
      color: 'emerald',
      features: [
        'Direitos exclusivos na cidade',
        'CRM + Portal do Cliente',
        'Treinamento 40h',
        'Suporte State/Region',
        'MIGREI Bank integrado'
      ],
      projection: {
        clients: '15 empresas (M12)',
        revenue: 'R$ 127.500/mês',
        profit: 'R$ 38.250/mês',
        payback: '6-8 meses'
      }
    },
    {
      tier: 'State',
      label: 'Franquia State',
      subtitle: 'Master Estadual',
      investment: 'R$ 180k - R$ 250k',
      royalty: '30% Cities',
      launchPromo: 'Tier 1-3 pricing',
      icon: Map,
      color: 'orange',
      features: [
        'Gestão das Cities do Estado',
        'Auditoria + Fiscalização',
        'BI Consolidado',
        'Treinamento 80h',
        'Setup Fee R$ 3k/City'
      ],
      projection: {
        clients: '20 Cities ativas',
        revenue: 'R$ 70.000/mês',
        profit: 'R$ 42.000/mês',
        payback: '4-5 meses'
      }
    },
    {
      tier: 'Region',
      label: 'Franquia Region',
      subtitle: 'Master Regional',
      investment: 'R$ 500k - R$ 1M',
      royalty: '20% Rede',
      launchPromo: 'Negociação direta HQ',
      icon: Globe,
      color: 'purple',
      features: [
        'Gestão de 3-5 States',
        'Centro de Operações',
        'BI Executivo',
        'Treinamento 120h',
        'Expansão Estratégica'
      ],
      projection: {
        clients: '100 Cities (5 States)',
        revenue: 'R$ 198.200/mês',
        profit: 'R$ 113.200/mês',
        payback: '9-11 meses'
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { icon: string; bg: string; border: string; text: string; check: string }> = {
      emerald: {
        icon: 'text-emerald-400',
        bg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        check: 'text-emerald-500'
      },
      orange: {
        icon: 'text-orange-400',
        bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        check: 'text-orange-500'
      },
      purple: {
        icon: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        check: 'text-purple-500'
      }
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-hidden">
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"> <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div> <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" /> <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" /> <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="mb-8 inline-block"> <div className="relative"> <div className="absolute inset-0 bg-orange-500/30 blur-3xl rounded-full opacity-50"></div> <img src={LOGO_URL} alt="MIGREI" className="h-24 md:h-32 w-auto relative z-10 drop-shadow-2xl" /> </div> </motion.div> <br />
                <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest shadow-lg shadow-emerald-500/10"> Energy Tech Ecosystem </span>
                <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tight leading-none"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">MIGREI</span> <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">CORPORATION</span> </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"> Não somos apenas uma consultoria. Somos um <span className="text-white font-bold">Ecossistema Tecnológico</span> vivo que conecta inteligência artificial, segurança bancária e uma rede de franquias capilarizada para democratizar a energia no Brasil. </p>
            </motion.div>
        </div>
      </section>
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-bold tracking-widest uppercase text-xs">Ecossistema Integrado</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                7 APPS ESPECIALIZADOS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Uma Única Plataforma</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Cada módulo é um sistema completo, porém todos se comunicam em tempo real através de APIs REST e eventos assíncronos, garantindo uma experiência fluida e dados sempre sincronizados.
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
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} p-3 text-white flex items-center justify-center shadow-lg`}>
                        <app.icon className="w-8 h-8" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-2 py-1 rounded">
                        {app.access.split(',')[0]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{app.name}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-3">{app.subtitle}</p>
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
                      <ChevronDown className={`w-3 h-3 transition-transform ${expandedOrg === app.id ? 'rotate-180' : ''}`} />
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
                  {organizationalApps.map(app => {
                    if (app.id !== expandedOrg) return null;
                    return (
                      <div key={app.id} className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} p-4 text-white flex items-center justify-center shadow-lg`}>
                            <app.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                            <p className="text-slate-400">{app.subtitle}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">Funcionalidades Completas</h4>
                            <div className="space-y-2">
                              {app.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">Acesso & Permissões</h4>
                            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                              <p className="text-sm text-slate-400 leading-relaxed">
                                <strong className="text-emerald-400">Níveis de Acesso:</strong><br />
                                {app.access}
                              </p>
                              <div className="mt-4 pt-4 border-t border-slate-800">
                                <p className="text-xs text-slate-500">
                                  Sistema com controle granular de permissões (RBAC) e auditoria completa de acessos via Blockchain.
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

      {/* Pricing & Investment Section */}
      <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Modelo de Investimento</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Escolha Seu Nível de Atuação
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Investimento científico baseado em ROI comprovado. Payback rápido, margens saudáveis e suporte completo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative group ${tier.tier === 'State' ? 'lg:scale-105 lg:z-10' : ''}`}
              >
                <div className={`bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${
                  tier.tier === 'State' ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20' : 'border-slate-800'
                } rounded-2xl p-8 h-full transition-all`}>
                  
                  {tier.tier === 'State' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wide">
                      Mais Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${getColorClasses(tier.color).bg} border ${getColorClasses(tier.color).border} flex items-center justify-center`}>
                      <tier.icon className={`w-10 h-10 ${getColorClasses(tier.color).icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{tier.label}</h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wide mb-4">{tier.subtitle}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-black text-white mb-2">{tier.investment}</div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-slate-500">Royalty:</span>
                        <span className={`font-bold ${getColorClasses(tier.color).text}`}>{tier.royalty}</span>
                      </div>
                      {tier.launchPromo && (
                        <div className="mt-2 inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                          <span className="text-xs font-bold text-emerald-400">{tier.launchPromo}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 ${getColorClasses(tier.color).check} shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Projeção (Ano 1)</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-500 mb-1">Clientes</div>
                        <div className="font-bold text-white">{tier.projection.clients}</div>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-500 mb-1">Receita/mês</div>
                        <div className="font-bold text-emerald-400">{tier.projection.revenue}</div>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-500 mb-1">Lucro/mês</div>
                        <div className="font-bold text-emerald-400">{tier.projection.profit}</div>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-500 mb-1">Payback</div>
                        <div className="font-bold text-orange-400">{tier.projection.payback}</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/franquia">
                    <button className={`w-full mt-6 py-3 px-6 rounded-xl font-bold transition-all ${
                      tier.tier === 'State'
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 hover:shadow-lg hover:shadow-orange-500/30'
                        : `bg-${tier.color}-600 text-white hover:bg-${tier.color}-500`
                    }`}>
                      Solicitar Informações
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Smart Split Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-950 border border-emerald-500/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="w-8 h-8 text-emerald-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Smart Split Automático</h3>
                <p className="text-sm text-slate-400">Divisão transparente e instantânea de royalties</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-300">MIGREI Core</span>
                  <span className="text-2xl font-black text-white">50%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-1/2"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Tecnologia, AI, Compliance, Suporte</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-300">State</span>
                  <span className="text-2xl font-black text-white">30%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 w-[30%]"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Gestão, Auditoria, Treinamento</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-300">Region</span>
                  <span className="text-2xl font-black text-white">20%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[20%]"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Estratégia, Expansão, Governança</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-emerald-400">Exemplo prático:</strong> Cliente paga R$ 127.500 → Royalty 8% = R$ 10.200 → 
                Core recebe <span className="text-white font-bold">R$ 5.100</span>, State <span className="text-white font-bold">R$ 3.060</span>, 
                Region <span className="text-white font-bold">R$ 2.040</span>. Tudo automático via MIGREI Bank.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2 block">Estrutura Organizacional</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                ARQUITETURA HIERÁRQUICA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">MULTI-TENANT</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Uma arquitetura fractal e escalável. Nossa estrutura hierárquica garante controle, suporte e agilidade na ponta, tudo conectado pelo mesmo "Cérebro Digital".
              </p>
            </div>
            <div className="relative"> <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2 z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <motion.div whileHover={{ y: -10 }} className="bg-slate-950 border border-indigo-500/50 p-8 rounded-2xl shadow-xl shadow-indigo-500/10 relative overflow-hidden group"> <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div> <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 mx-auto border border-indigo-500/30"> <Cpu className="w-8 h-8" /> </div> <h3 className="text-xl font-bold text-white text-center mb-2">MIGREI Core</h3> <p className="text-slate-400 text-sm text-center"> A Sede (Headquarters). Onde residem a Inteligência Artificial, o Compliance, o Jurídico e a Tecnologia central. </p> </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="bg-slate-950 border border-slate-800 hover:border-purple-500/50 p-8 rounded-2xl shadow-lg transition-all group"> <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-purple-400 mx-auto border border-slate-800 group-hover:border-purple-500/30"> <Globe className="w-8 h-8" /> </div> <div className="text-center"> <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-1 block">Master Franchise</span> <h3 className="text-xl font-bold text-white mb-2">MIGREI Region</h3> <p className="text-slate-400 text-sm"> Gestão macro estratégica por regiões (Sul, Sudeste, etc). Garante a adaptação às realidades locais. </p> </div> </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="bg-slate-950 border border-slate-800 hover:border-orange-500/50 p-8 rounded-2xl shadow-lg transition-all group"> <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-orange-400 mx-auto border border-slate-800 group-hover:border-orange-500/30"> <Map className="w-8 h-8" /> </div> <div className="text-center"> <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1 block">Master Estadual</span> <h3 className="text-xl font-bold text-white mb-2">MIGREI State</h3> <p className="text-slate-400 text-sm"> Auditoria e suporte operacional para as franquias da ponta. O elo de controle de qualidade. </p> </div> </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="bg-slate-950 border border-slate-800 hover:border-emerald-500/50 p-8 rounded-2xl shadow-lg transition-all group"> <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 mx-auto border border-slate-800 group-hover:border-emerald-500/30"> <Building2 className="w-8 h-8" /> </div> <div className="text-center"> <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1 block">Unidade Operacional</span> <h3 className="text-xl font-bold text-white mb-2">MIGREI City</h3> <p className="text-slate-400 text-sm"> O franqueado local. Atendimento exclusivo, relacionamento próximo e captação de clientes. </p> </div> </motion.div>
                </div>
            </div>
         </div>
      </section>
      <section className="py-24 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div> <h2 className="text-4xl font-display font-bold text-white mb-6"> Tecnologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Multi-Tenant</span> e Segurança Militar </h2> <p className="text-slate-400 text-lg mb-8 leading-relaxed"> Nossa plataforma opera como um "Edifício Digital". Cada cliente e franqueado possui sua sala segura (Tenant), isolada por criptografia RLS (Row Level Security), mas todos se beneficiam da infraestrutura compartilhada de alta performance. </p> <ul className="space-y-6"> <li className="flex gap-4 group"> <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-emerald-500/50 rounded-lg h-fit transition-colors"><Database className="w-6 h-6 text-emerald-500"/></div> <div> <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">Banco de Dados Unificado</h4> <p className="text-slate-400 text-sm">Dados fluem em tempo real entre City, State e Core, permitindo auditoria instantânea.</p> </div> </li> <li className="flex gap-4 group"> <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-yellow-500/50 rounded-lg h-fit transition-colors"><Share2 className="w-6 h-6 text-yellow-500"/></div> <div> <h4 className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors">Smart Split Automático</h4> <p className="text-slate-400 text-sm">O sistema MIGREI Bank reconhece a hierarquia da franquia e divide os royalties na fonte do pagamento.</p> </div> </li> <li className="flex gap-4 group"> <div className="p-2 bg-slate-900 border border-slate-700 group-hover:border-indigo-500/50 rounded-lg h-fit transition-colors"><Layers className="w-6 h-6 text-indigo-500"/></div> <div> <h4 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">Inteligência Artificial Nativa</h4> <p className="text-slate-400 text-sm">A Migrei IA não é um plugin. Ela é o núcleo que analisa contratos e faturas 24/7.</p> </div> </li> </ul> </div>
                <div className="relative"> <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-full blur-[100px]"></div> <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl"> <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4"> <div className="flex items-center gap-3"> <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div> <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div> <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div> </div> <div className="text-xs font-mono text-slate-500">SYSTEM_STATUS: ONLINE</div> </div> <div className="space-y-4 font-mono text-sm"> <div className="flex justify-between"> <span className="text-slate-400">Core.AI.Model</span> <span className="text-emerald-400">Gemini 2.5 Flash</span> </div> <div className="flex justify-between"> <span className="text-slate-400">Bank.Gateway</span> <span className="text-emerald-400">Open Finance Brasil</span> </div> <div className="flex justify-between"> <span className="text-slate-400">Security.Protocol</span> <span className="text-emerald-400">TLS 1.3 / OAuth2</span> </div> <div className="flex justify-between"> <span className="text-slate-400">Database.RLS</span> <span className="text-emerald-400">Active (Multi-Tenant)</span> </div> <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-500 leading-relaxed">{`> Initializing Neural Network... OK`}<br/>{`> Connecting to Energy Distributors... OK`}<br/>{`> Smart Split Engine... READY`}<br/> <span className="text-emerald-500 animate-pulse">_ System Fully Operational</span> </div> </div> </div> </div>
            </div>
         </div>
      </section>
      <section className="py-24 bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-6xl font-display font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"> Energia Livre para Todos. </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"> Nossa missão é usar tecnologia de ponta para libertar empresas brasileiras dos custos abusivos de energia, criando riqueza compartilhada através da nossa rede de parceiros. </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center"> <Link to="/franquia"> <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"> <Network className="w-5 h-5 text-white" /> Fazer Parte da Rede </button> </Link> <Link to="/contato"> <button className="px-10 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-800 hover:border-white transition-all flex items-center justify-center gap-2"> Falar com a Corporation <ArrowRight className="w-4 h-4" /> </button> </Link> </div>
         </div>
      </section>
    </div>
  );
};
export default Sobre;