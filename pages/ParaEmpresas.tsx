import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle,
  TrendingDown,
  Clock,
  Loader2,
  FileText,
  FileSignature,
  Settings,
  X,
  ArrowRight,
  Shield,
  Rocket,
} from 'lucide-react';
import { LOGO_URL } from '../constants';
import { LeadService } from '../services/supabase';
import NovaLeiCTA from '../components/NovaLeiCTA';

interface MigrationStep {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  details?: string;
  benefits?: string[];
}

const ParaEmpresas: React.FC = () => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    empresa: '',
    cnpj: '',
  });
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
      const detailsMessage = `CONTRATO DE CONSULTORIA - CONSOLIDAÇÃO\n---------------------------------------\nEmpresa: ${formData.empresa}\nCNPJ: ${formData.cnpj}\nContato: ${formData.nome_completo}\nTelefone: ${formData.telefone}\n\nSolicitação de Consolidação do Contrato de Consultoria com MIGREI Comercialização Varejista`;
      const result = await LeadService.create({
        name: formData.nome_completo,
        email: formData.email,
        phone: formData.telefone,
        company: formData.empresa,
        message: detailsMessage,
      });
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ nome_completo: '', email: '', telefone: '', empresa: '', cnpj: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Erro desconhecido.');
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erro de conexão.';
      setSubmitStatus('error');
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const timelineSteps: MigrationStep[] = [
    {
      icon: FileText,
      title: 'Diagnóstico Inicial',
      description: 'Análise completa da conta',
      duration: '1-2 dias',
      details:
        'Nossos especialistas analisam detalhadamente sua conta de energia, histórico de consumo e padrões de uso para criar um diagnóstico preciso.',
      benefits: [
        'Análise de 24 meses de histórico',
        'Identificação de ineficiências',
        'Potencial de economia calculado',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Cálculo de Viabilidade',
      description: 'Simulação precisa da economia',
      duration: '1 dia',
      details:
        'Com dados em mãos, simulamos diversos cenários de migração para o Mercado Livre, sempre buscando a melhor relação custo-benefício.',
      benefits: [
        'Múltiplos cenários analisados',
        'Projeção de 36 meses',
        'Melhor relação custo-benefício',
      ],
    },
    {
      icon: Settings,
      title: 'Habilitação CCEE',
      description: 'Documentação e segurança regulatória',
      duration: '15-30 dias',
      details:
        'Cuidamos de toda a habilitação junto à CCEE para você operar no Mercado Livre de Energia com total conformidade.',
      benefits: ['Documentação completa', 'Conformidade assegurada', 'Acompanhamento 100%'],
    },
    {
      icon: Rocket,
      title: 'Migração e Go-live',
      description: 'Transição segura e sem interrupções',
      duration: '1 dia',
      details:
        'Executamos a virada operacional e monitoramos os primeiros ciclos para garantir economia imediata.',
      benefits: ['Zero downtime', 'Suporte 24/7', 'Relatórios mensais automáticos'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/70 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-bold uppercase tracking-wide">
                <Sparkles className="w-4 h-4" /> Para Empresas
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-white leading-tight">
                Migre para o Mercado Livre com segurança e ROI imediato
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                Consultoria ponta a ponta, habilitação CCEE e operação contínua com IA e compliance
                integrados. Zero downtime, contratos digitais e suporte 24/7.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Diagnóstico em 48h',
                  'Habilitação CCEE inclusa',
                  'Renegociação automática',
                  'Gerente dedicado 24/7',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-900/70 border border-slate-800 rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#form-section" className="w-full sm:w-auto">
                  <button className="w-full bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-105">
                    Consolidar Contrato
                  </button>
                </a>
                <a
                  href="https://forms.gle/izq23HmRnSYEFkJ9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-amber-600/20 transition-all">
                    Falar com Especialista
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
                <div className="w-[480px] h-[480px] border-2 border-dashed border-emerald-500/20 rounded-full" />
                <div className="absolute w-[360px] h-[360px] border border-dotted border-cyan-500/20 rounded-full" />
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
                  className="relative w-96 h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -top-6 right-4 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Operação 24/7</div>
                    <div className="text-xs text-slate-400">Compliance + IA no Core</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESSO COM MODALS */}
      <section id="planos" className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Processo Completo
              </span>{' '}
              de Migração
            </h2>
            <p className="text-slate-400 text-lg mt-4">
              Clique em cada etapa para conhecer os detalhes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedStep(index)}
                className="cursor-pointer bg-gradient-to-b from-slate-900 to-slate-950 p-5 rounded-xl border border-slate-800 shadow-[0_0_20px_rgba(249,115,22,0.05)] hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all group h-full flex flex-col"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg flex items-center justify-center mb-4 border border-yellow-500/20 group-hover:border-orange-500/50 transition-all">
                    <step.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed flex-1">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                      <Clock className="w-2.5 h-2.5" /> {step.duration}
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
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
                    {React.createElement(timelineSteps[selectedStep].icon, {
                      className: 'w-8 h-8 text-white',
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {timelineSteps[selectedStep].title}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Clock className="w-4 h-4" /> {timelineSteps[selectedStep].duration}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStep(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Detalhes da Etapa</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {timelineSteps[selectedStep].details}
                  </p>
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
                    className="w-full bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Próxima Etapa
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nova Lei CTA - Compact variant - Posicionamento estratégico #2 */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NovaLeiCTA variant="compact" />
        </div>
      </section>

      {/* CONTRATO DE CONSOLIDAÇÃO */}
      <section id="form-section" className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="bg-slate-900 border border-emerald-500/20 rounded-3xl shadow-2xl overflow-hidden relative">
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-6 md:p-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
                  <FileSignature className="w-8 h-8" /> Consolide Seu Contrato Agora
                </h2>
                <p className="text-emerald-50 text-lg">
                  Formalize sua parceria com a MIGREI Comercialização Varejista
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[ 
                    {
                      title: 'R$ 480k/ano',
                      desc: 'Economia projetada em rede hospitalar',
                    },
                    {
                      title: '0 multas',
                      desc: 'Migração conduzida com compliance total',
                    },
                    {
                      title: '9.4/10',
                      desc: 'NPS dos gestores após onboarding',
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center"
                    >
                      <div className="text-2xl font-black text-emerald-400">{card.title}</div>
                      <div className="text-sm text-slate-400">{card.desc}</div>
                    </div>
                  ))}
                </div>
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8 text-center"
                  >
                    <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/30 p-8">
                      <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Contrato Formalizado com Sucesso!
                      </h3>
                      <p className="text-slate-300 text-lg mb-6">
                        Sua solicitação foi recebida. Nossa equipe entrará em contato em até 24
                        horas para confirmar e enviar todos os documentos.
                      </p>
                      <div className="bg-slate-950 rounded-xl p-6 border border-emerald-500/20 mb-6">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">
                          Próximos Passos:
                        </h4>
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

                    {/* INFO BOX - Benefícios da Consultoria */}
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20 p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-3">
                            Benefícios rápidos da Consultoria MIGREI
                          </h4>
                          <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                              Diagnóstico gratuito e viabilidade entregue em 48h
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                              Habilitação CCEE e negociação com gerador incluídas
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                              Simulador de economia com números comprovados em rede hospitalar
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                              Sem multa de saída e contrato digital pronto para assinatura
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">
                          Nome Completo *
                        </label>
                        <input
                          id="nome_completo"
                          required
                          placeholder="Seu nome"
                          aria-label="Nome completo"
                          value={formData.nome_completo}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">
                          Email Corporativo *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                          aria-label="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">
                          Telefone *
                        </label>
                        <input
                          id="telefone"
                          required
                          placeholder="(11) 99999-9999"
                          aria-label="Telefone"
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
                          placeholder="XX.XXX.XXX/0001-XX"
                          aria-label="CNPJ"
                          value={formData.cnpj}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-slate-400 text-xs font-bold uppercase">
                          Empresa/Razão Social *
                        </label>
                        <input
                          id="empresa"
                          required
                          placeholder="Nome da empresa"
                          aria-label="Empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* CONTRATO INFO */}
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-400" />O que está incluído:
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
                      className="w-full bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-emerald-700/20 mt-8 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <FileSignature className="w-5 h-5" />
                          Consolidar Contrato
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      Diagnóstico gratuito, sem cartão. Assinatura digital e cancelamento sem
                      multa.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ / DÚVIDAS */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
              Dúvidas Frequentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Existe custo para migrar?',
                a: 'Não! MIGREI cobre todos os custos de migração. Você só paga pelos nossos serviços de consultoria após a economia começar.',
              },
              {
                q: 'Quanto tempo leva para economizar?',
                a: 'A economia começa no primeiro mês após a migração. O processo total de migração (diagnóstico a implementação) leva 30-45 dias.',
              },
              {
                q: 'E se não for viável migrar para minha empresa?',
                a: 'Se não for viável, você não paga nada. Fazemos diagnóstico gratuito e só prosseguimos se houver potencial comprovado de economia.',
              },
              {
                q: 'Qual é a economia média?',
                a: 'A economia média é de 25-30% na conta de energia. Alguns clientes chegam a 40%. Tudo depende do perfil de consumo.',
              },
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
            <p className="text-slate-400 text-lg mb-8">
              Agende uma conversa com nossos especialistas - Totalmente gratuita
            </p>
            <a
              href="https://forms.gle/izq23HmRnSYEFkJ9A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-emerald-700 to-cyan-700 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-105">
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
