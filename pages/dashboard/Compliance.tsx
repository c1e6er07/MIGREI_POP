import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileCheck, Lock, Eye, AlertTriangle, CheckCircle2, Siren, FileText } from 'lucide-react';

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'status' | 'report' | 'audit'>('status');

  const regulatoryStatus = [
    { agency: 'ANEEL', status: 'compliant', lastCheck: 'Hoje, 08:00', message: 'Resolução 1.000/2021 atendida.' },
    { agency: 'CCEE', status: 'compliant', lastCheck: 'Hoje, 08:15', message: 'Adesão e modelagem regular.' },
    { agency: 'BACEN', status: 'warning', lastCheck: 'Ontem', message: 'Nova circular sobre ITP pendente de revisão.' },
    { agency: 'LGPD', status: 'compliant', lastCheck: 'Contínuo', message: 'Auditoria de dados ativa.' },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-emerald-500" />
            Compliance & Riscos
          </h1>
          <p className="text-slate-400 text-sm">Monitoramento regulatório e integridade corporativa.</p>
        </div>
        
        <div className="flex gap-2 p-1 bg-slate-900 border border-slate-800 rounded-lg">
           <button 
             onClick={() => setActiveTab('status')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'status' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'}`}
           >
             Painel Regulatório
           </button>
           <button 
             onClick={() => setActiveTab('report')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'report' ? 'bg-red-900/20 text-red-400 shadow border border-red-900/30' : 'text-slate-400 hover:text-white'}`}
           >
             Canal de Denúncias
           </button>
        </div>
      </div>

      {/* Overview Stats */}
      {activeTab === 'status' && (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {regulatoryStatus.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-6 rounded-xl border ${item.status === 'compliant' ? 'bg-slate-900 border-slate-800' : 'bg-orange-900/10 border-orange-500/30'}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-white text-lg">{item.agency}</h3>
                            {item.status === 'compliant' ? (
                                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                            ) : (
                                <AlertTriangle className="w-6 h-6 text-orange-500 animate-pulse" />
                            )}
                        </div>
                        <p className={`text-sm font-medium mb-1 ${item.status === 'compliant' ? 'text-emerald-400' : 'text-orange-400'}`}>
                            {item.status === 'compliant' ? 'Regular' : 'Atenção Requerida'}
                        </p>
                        <p className="text-xs text-slate-500">{item.message}</p>
                        <p className="text-[10px] text-slate-600 mt-4 pt-2 border-t border-slate-800/50">Última verificação: {item.lastCheck}</p>
                    </motion.div>
                ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-500" /> Documentos Obrigatórios (Rede)
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 rounded text-slate-400"><Lock className="w-4 h-4"/></div>
                            <div>
                                <p className="text-sm font-bold text-white">Manual de Conduta e Ética</p>
                                <p className="text-xs text-slate-500">Versão 2.1 (Vigente)</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full">Assinado</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 rounded text-slate-400"><FileCheck className="w-4 h-4"/></div>
                            <div>
                                <p className="text-sm font-bold text-white">Certidão Negativa de Débitos (CND)</p>
                                <p className="text-xs text-slate-500">Vencimento: 15/12/2024</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full">Válida</span>
                    </div>
                </div>
            </div>
        </>
      )}

      {activeTab === 'report' && (
          <div className="max-w-2xl mx-auto">
              <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-red-500/10 rounded-full text-red-500 border border-red-500/20">
                          <Siren className="w-8 h-8" />
                      </div>
                      <div>
                          <h2 className="text-xl font-bold text-white">Canal de Ética e Denúncias</h2>
                          <p className="text-red-300/70 text-sm">Ambiente seguro, criptografado e anônimo.</p>
                      </div>
                  </div>
                  
                  <div className="space-y-4">
                      <p className="text-slate-400 text-sm leading-relaxed">
                          Este canal deve ser utilizado para reportar violações ao Código de Ética, corrupção, assédio, fraudes financeiras ou irregularidades regulatórias na rede MIGREI CORPORATION.
                      </p>
                      
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Tipo de Ocorrência</label>
                          <select className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500">
                              <option>Fraude Financeira / Desvio</option>
                              <option>Assédio Moral ou Sexual</option>
                              <option>Violação de Dados (LGPD)</option>
                              <option>Irregularidade Regulatória (ANEEL/CCEE)</option>
                              <option>Outros</option>
                          </select>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Relato Detalhado</label>
                          <textarea className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500 h-32 resize-none" placeholder="Descreva o ocorrido com o máximo de detalhes possível..."></textarea>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                          <input type="checkbox" id="anon" className="w-4 h-4 accent-red-500" />
                          <label htmlFor="anon" className="text-sm text-slate-400 select-none cursor-pointer">Desejo manter meu anonimato total.</label>
                      </div>

                      <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                          <Lock className="w-4 h-4" /> Enviar Denúncia Segura
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Compliance;