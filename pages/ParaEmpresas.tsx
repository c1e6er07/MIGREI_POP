import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle, TrendingDown, Clock, Loader2, FileText, FileSignature, Settings, X, ArrowRight, Zap, Shield, Users, Award, Rocket, DollarSign } from 'lucide-react';
import { LOGO_URL } from '../constants';
import { LeadService } from '../services/supabase';

interface MigrationStep {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  details?: string;
  benefits?: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

const ParaEmpresas: React.FC = () => {
  const [formData, setFormData] = useState({ nome_completo: "", email: "", telefone: "", empresa: "", cnpj: "" });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true); 
    setErrorMessage(''); 
    setSubmitStatus('idle');
    try {
      const detailsMessage = `CONTRATO DE CONSULTORIA - CONSOLIDAÇÃO\n---------------------------------------\nEmpresa: ${formData.empresa}\nCNPJ: ${formData.cnpj}\nContato: ${formData.nome_completo}\nTelefone: ${formData.telefone}\n\nSolicitação de Consolidação do Contrato de Consultoria com MIGREI Comercializadora Varejista`;
      const result = await LeadService.create({ name: formData.nome_completo, email: formData.email, phone: formData.telefone, company: formData.empresa, message: detailsMessage });
      if (result.success) { setSubmitStatus('success'); setFormData({ nome_completo: "", email: "", telefone: "", empresa: "", cnpj: "" }); } else { setSubmitStatus('error'); setErrorMessage(result.error || 'Erro desconhecido.'); }
    } catch (error: unknown) { const message = error instanceof Error ? error.message : 'Erro de conexão.'; setSubmitStatus('error'); setErrorMessage(message); } finally { setLoading(false); }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, [e.target.id]: e.target.value }); };
  
  const timelineSteps: MigrationStep[] = [
    { 
      icon: FileText, 
      title: "Diagnóstico Inicial", 
      description: "Análise completa da conta", 
      duration: "1-2 dias",
      details: "Nossos especialistas analisam detalhadamente sua conta de energia, histórico de consumo e padrões de uso para criar um diagnóstico preciso.",
      benefits: ["Análise de 24 meses de histórico", "Identificação de ineficiências", "Potencial de economia calculado"]
    },
    { 
      icon: TrendingDown, 
      title: "Cálculo de Viabilidade", 
      description: "Simulação precisa da economia", 
      duration: "1 dia",
      details: "Com dados em mãos, simulamos diversos cenários de migração para o Mercado Livre, sempre buscando a melhor relação custo-benefício.",
      benefits: ["Múltiplos cenários analisados", "Projeção de 36 meses", "ROI detalhado"]
    },
    { 
      icon: CheckCircle, 
      title: "Habilitação CCEE", 
      description: "Registro na Câmara", 
      duration: "15-30 dias",
      details: "Realizamos todo o processo de cadastro junto à CCEE (Câmara de Comercialização de Energia Elétrica) sem custo para você.",
      benefits: ["Documentação completa", "Contatos diretos com CCEE", "Acompanhamento 100%"]
    },
    { 
      icon: FileSignature, 
      title: "Negociação", 
      description: "Busca dos melhores preços", 
      duration: "5-10 dias",
      details: "Nossa rede de fornecedores permite negociar os melhores preços de energia do mercado, garantindo máxima economia.",
      benefits: ["Rede de 50+ fornecedores", "Preços competitivos", "Contrato transparente"]
    },
    { 
      icon: TrendingDown, 
      title: "Migração Completa", 
      description: "Transição segura", 
      duration: "1 dia",
      details: "A migração é rápida e segura. Sua empresa passa a usufruir da economia imediatamente sem qualquer interrupção.",
      benefits: ["Zero downtime", "Transição segura", "Início imediato dos ganhos"]
    },
    { 
      icon: Settings, 
      title: "Gestão Contínua", 
      description: "Acompanhamento mensal", 
      duration: "Permanente",
      details: "Acompanhamos continuamente o mercado e geramos relatórios mensais otimizando sua estratégia de energia.",
      benefits: ["Relatórios mensais", "Otimizações constantes", "Suporte 24/7"]
    }
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Professional",
      price: "R$ 2.990",
      description: "/mês",
      features: [
        "✓ Até R$ 500k/ano em economia",
        "✓ Diagnóstico e simulação completos",
        "✓ Habilitação CCEE incluída",
        "✓ Negociação de contratos",
        "✓ Dashboard de acompanhamento",
        "✓ Relatório mensal",
        "✓ Suporte via email"
      ],
      cta: "Começar Agora"
    },
    {
      name: "Enterprise",
      price: "R$ 5.990",
      description: "/mês",
      highlight: true,
      features: [
        "✓ Economia ILIMITADA",
        "✓ Tudo do plano Professional",
        "✓ Gerente dedicado 24/7",
        "✓ Renegociação trimestral automática",
        "✓ Análise de cenários ilimitada",
        "✓ Integração com ERP",
        "✓ Consultoria estratégica"
      ],
      cta: "Solicitar Demo"
    },
    {
      name: "Performance",
      price: "10% dos savings",
      description: "modelo alternativo",
      features: [
        "✓ Sem custo fixo inicial",
        "✓ Você paga apenas pela economia gerada",
        "✓ Diagnóstico gratuito",
        "✓ Ideal para pequenas-médias empresas",
        "✓ Sem compromisso mínimo",
        "✓ Flexibilidade total",
        "✓ ROI garantido"
      ],
      cta: "Conhecer Detalhes"
    }
  ];
  return (
    <div className="min-h-screen bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-lg font-semibold">Para Empresas</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6 text-white leading-tight">
                Economize até <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">30%</span> na Conta de Energia
              </h1>
              <p className="text-slate-300 mb-8 text-xl leading-relaxed">
                Sem investimento inicial. Sem riscos. Só economia garantida desde o primeiro mês.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative hidden lg:flex items-center justify-center">
              <img src={LOGO_URL} alt="MIGREI" className="relative w-96 h-96 object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESSO COM MODALS */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Processo Completo</span> de Migração
            </h2>
            <p className="text-slate-400 text-lg mt-4">Clique em cada etapa para conhecer os detalhes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedStep(index)}
                className="cursor-pointer bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-[0_0_20px_rgba(249,115,22,0.05)] hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all group"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20 group-hover:border-orange-500/50 transition-all">
                    <step.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">{step.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                      <Clock className="w-3 h-3" /> {step.duration}
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DO PROCESSO */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-800 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b border-slate-800 p-8 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(timelineSteps[selectedStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{timelineSteps[selectedStep].title}</h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Clock className="w-4 h-4" /> {timelineSteps[selectedStep].duration}
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedStep(null)} className="text-slate-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Detalhes da Etapa</h4>
                  <p className="text-slate-300 leading-relaxed">{timelineSteps[selectedStep].details}</p>
                </div>

                {timelineSteps[selectedStep].benefits && (
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">O que você ganha:</h4>
                    <div className="space-y-2">
                      {timelineSteps[selectedStep].benefits!.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedStep(null)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Próxima Etapa
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTRATO DE CONSOLIDAÇÃO */}
      <section id="form-section" className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="bg-slate-900 border border-emerald-500/20 rounded-3xl shadow-2xl overflow-hidden relative">
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-6 md:p-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
                  <FileSignature className="w-8 h-8" /> Consolide Seu Contrato Agora
                </h2>
                <p className="text-emerald-50 text-lg">Formalize sua parceria com a MIGREI Comercializadora Varejista - Investimento Simbólico</p>
              </div>

              <div className="p-8">
                {submitStatus === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 text-center">
                    <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/30 p-8">
                      <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Contrato Formalizado com Sucesso!</h3>
                      <p className="text-slate-300 text-lg mb-6">
                        Sua solicitação foi recebida. Nossa equipe entrará em contato em até 24 horas para confirmar e enviar todos os documentos.
                      </p>
                      <div className="bg-slate-950 rounded-xl p-6 border border-emerald-500/20 mb-6">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">Próximos Passos:</h4>
                        <ul className="space-y-3 text-left">
                          <li className="flex items-center gap-3 text-slate-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            Confirmação via email em 24h
                          </li>
                          <li className="flex items-center gap-3 text-slate-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            Envio do contrato assinado
                          </li>
                          <li className="flex items-center gap-3 text-slate-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            Início imediato do processo de migração
                          </li>
                          <li className="flex items-center gap-3 text-slate-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            Acompanhamento dedicado do seu gerente
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="w-full text-emerald-400 hover:text-emerald-300 font-bold py-3 border border-emerald-500/30 rounded-xl transition-all hover:border-emerald-500/60"
                    >
                      Fazer Outra Solicitação
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus === 'error' && (
                      <div className="text-red-500 text-sm bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                        {errorMessage}
                      </div>
                    )}
                    
                    {/* INFO BOX */}
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <DollarSign className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Investimento Simbólico para Consolidação</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            Taxa única de <span className="text-yellow-400 font-bold">R$ 99</span> para consolidar o contrato de consultoria com a MIGREI Comercializadora Varejista. Após a consolidação, você aproveitará de todas as vantagens do programa de redução de custos energéticos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">Nome Completo *</label>
                        <input
                          id="nome_completo"
                          required
                          value={formData.nome_completo}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">Email Corporativo *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">Telefone *</label>
                        <input
                          id="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">CNPJ *</label>
                        <input
                          id="cnpj"
                          required
                          value={formData.cnpj}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">Empresa/Razão Social *</label>
                        <input
                          id="empresa"
                          required
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* CONTRATO INFO */}
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-400" />
                        O que está incluído:
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Contrato padrão de consultoria
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Acesso à plataforma MIGREI
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Diagnóstico energético completo
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Gerente dedicado 24/7
                        </li>
                      </ul>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg mt-8 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <FileSignature className="w-5 h-5" />
                          Consolidar Contrato (R$ 99)
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE PRECIFICAÇÃO */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Precificação Transparente</span>
            </h2>
            <p className="text-slate-400 text-lg">Escolha o plano que melhor se adequa ao seu perfil</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`rounded-2xl border transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.2)] scale-105'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                } p-8`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm">MAIS POPULAR</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 ml-2">{plan.description}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://forms.gle/izq23HmRnSYEFkJ9A" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button
                    className={`w-full font-bold py-3 px-6 rounded-xl transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16 bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">ROI Garantido</h4>
                <p className="text-slate-400 text-sm">Economia real desde o 1º mês com garantia de resultados</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Sem Riscos</h4>
                <p className="text-slate-400 text-sm">Cancelamento sem multa. Sem compromisso mínimo</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">500+ Clientes</h4>
                <p className="text-slate-400 text-sm">Empresas confiando em MIGREI há 3+ anos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ / DÚVIDAS */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">Dúvidas Frequentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Existe custo para migrar?",
                a: "Não! MIGREI cobre todos os custos de migração. Você só paga pelos nossos serviços de consultoria após a economia começar."
              },
              {
                q: "Quanto tempo leva para economizar?",
                a: "A economia começa no primeiro mês após a migração. O processo total de migração (diagnóstico a implementação) leva 30-45 dias."
              },
              {
                q: "E se não for viável migrar para minha empresa?",
                a: "Se não for viável, você não paga nada. Fazemos diagnóstico gratuito e só prosseguimos se houver potencial comprovado de economia."
              },
              {
                q: "Qual é a economia média?",
                a: "A economia média é de 25-30% na conta de energia. Alguns clientes chegam a 40%. Tudo depende do perfil de consumo."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/30 transition-all"
              >
                <h4 className="font-bold text-white mb-2 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold text-lg mt-0.5">Q:</span>
                  {item.q}
                </h4>
                <p className="text-slate-400 ml-6">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para economizar?</h2>
            <p className="text-slate-400 text-lg mb-8">Agende uma conversa com nossos especialistas - Totalmente gratuita</p>
            <a href="https://forms.gle/izq23HmRnSYEFkJ9A" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg transition-all hover:scale-105">
                <span className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Comece Agora
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ParaEmpresas;