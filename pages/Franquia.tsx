import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CheckCircle2, Share2, Building2, Map, Globe } from 'lucide-react';
import { LOGO_URL } from '../constants';

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
      'Pagamentos PIX e Cartão',
    ],
    projection: {
      clients: '15 empresas (M12)',
      revenue: 'R$ 127.500/mês',
      profit: 'R$ 38.250/mês',
      payback: '6-8 meses',
    },
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
      'Setup Fee R$ 3k/City',
    ],
    projection: {
      clients: '20 Cities ativas',
      revenue: 'R$ 70.000/mês',
      profit: 'R$ 42.000/mês',
      payback: '4-5 meses',
    },
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
      'Expansão Estratégica',
    ],
    projection: {
      clients: '100 Cities (5 States)',
      revenue: 'R$ 198.200/mês',
      profit: 'R$ 113.200/mês',
      payback: '9-11 meses',
    },
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { icon: string; bg: string; border: string; text: string; check: string }> = {
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

const Franquia: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
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
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-950/80 to-yellow-950/80 border-2 border-orange-400/60 rounded-full mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                <DollarSign className="w-4 h-4 text-orange-300" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-xs md:text-sm font-bold uppercase tracking-wide">
                  Para Investidores
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Modelos de Franquia MIGREI
                </span>
              </h1>
              <p className="text-slate-300 mb-8 text-xl leading-relaxed max-w-2xl">
                Escolha o nível (City, State ou Region), conecte-se ao Core e acompanhe o retorno:
                ROI comprovado, payback acelerado e playbook completo de expansão.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30 text-center">
                  <div className="text-2xl font-black text-emerald-400 mb-1">R$ 45k</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Investimento Inicial
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30 text-center">
                  <div className="text-2xl font-black text-orange-400 mb-1">4-11</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Meses Payback
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 text-center">
                  <div className="text-2xl font-black text-blue-400 mb-1">20%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">
                    Royalties Dinâmicos
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[420px] h-[420px] border-2 border-dashed border-emerald-500/20 rounded-full" />
                <div className="absolute w-[320px] h-[320px] border border-dotted border-cyan-500/20 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-30" />
                <img
                  src={LOGO_URL}
                  alt="MIGREI"
                  className="relative w-80 h-80 object-contain drop-shadow-2xl"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -top-6 right-4 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Blueprint Validado</div>
                    <div className="text-xs text-slate-400">Playbook + Split automático</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="modelos" className="py-8 pb-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div
                  className={`bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${
                    tier.tier === 'State'
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20'
                      : 'border-slate-800'
                  } rounded-2xl p-8 h-full transition-all`}
                >
                  {tier.tier === 'State' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wide">
                      Mais Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${getColorClasses(tier.color).bg} border ${getColorClasses(tier.color).border} flex items-center justify-center`}
                    >
                      <tier.icon className={`w-10 h-10 ${getColorClasses(tier.color).icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{tier.label}</h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wide mb-4">
                      {tier.subtitle}
                    </p>

                    <div className="mb-6">
                      <div className="text-4xl font-black text-white mb-2">{tier.investment}</div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-slate-500">Royalty:</span>
                        <span className={`font-bold ${getColorClasses(tier.color).text}`}>
                          {tier.royalty}
                        </span>
                      </div>
                      {tier.launchPromo && (
                        <div className="mt-2 inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                          <span className="text-xs font-bold text-emerald-400">
                            {tier.launchPromo}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 ${getColorClasses(tier.color).check} shrink-0 mt-0.5`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                      Projeção (Ano 1)
                    </h4>
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

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className={`w-full mt-6 py-3 px-6 rounded-xl font-bold transition-all opacity-80 cursor-not-allowed ${
                      tier.tier === 'State'
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950'
                        : `bg-${tier.color}-600 text-white`
                    }`}
                    title="Links temporariamente desativados"
                  >
                    Solicitar Informações
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Franquia;
