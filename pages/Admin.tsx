import React, { useState, useEffect } from 'react';
import { Shield, Lock, Users, FileText, Search, Filter, CheckCircle, XCircle, Clock, Loader2, LogOut } from 'lucide-react';
import { ADMIN_PASSWORD } from '../constants';
import { LeadService } from '../services/supabase';
import { AdminLead } from '../types';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'news'>('leads');
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

  useEffect(() => {
     const auth = sessionStorage.getItem('admin_auth');
     if (auth === 'true') {
        setIsAuthenticated(true);
        loadLeads();
     }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
     e.preventDefault();
     if (passwordInput === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_auth', 'true');
        loadLeads();
     } else {
        setErrorMsg('Senha administrativa incorreta.');
     }
  };

  const handleLogout = () => {
     setIsAuthenticated(false);
     sessionStorage.removeItem('admin_auth');
     setPasswordInput('');
  };

   const loadLeads = async () => {
    setLoadingLeads(true);
    try {
      const data = await LeadService.getAll();
      setLeads(data);
      } catch (_error) {
         void _error;
      setLeads([]);
    } finally {
      setLoadingLeads(false);
    }
  };

   const updateLeadStatus = async (id: number, status: AdminLead['status']) => {
    try {
      const success = await LeadService.updateStatus(id, status);
      if (success) {
            setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
      }
      } catch (_error) {
         void _error;
      // Error handling
    }
  };

  if (!isAuthenticated) {
     return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
              <div className="flex justify-center mb-6">
                 <div className="p-4 bg-slate-950 rounded-full border border-slate-800">
                    <Shield className="w-8 h-8 text-emerald-500" />
                 </div>
              </div>
              <h1 className="text-2xl font-bold text-white text-center mb-2">Acesso Restrito</h1>
              <p className="text-slate-400 text-center mb-8 text-sm">Painel exclusivo para Gestores MIGREI.</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                 <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Senha Mestra</label>
                    <div className="relative mt-1">
                       <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                       <input 
                          type="password" 
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 text-white focus:border-emerald-500 outline-none"
                          placeholder="••••••••"
                       />
                    </div>
                 </div>
                 {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}
                 <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors">
                    Entrar no Painel
                 </button>
              </form>
           </div>
        </div>
     );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
       <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                   <Shield className="w-8 h-8 text-emerald-500" />
                   Painel Administrativo
                </h1>
                <p className="text-slate-400 mt-1">Gestão de Leads e Conteúdo do Site</p>
             </div>
             <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-red-900/20 hover:border-red-900/50 hover:text-red-400 text-slate-300 rounded-lg transition-all text-sm font-bold">
                <LogOut className="w-4 h-4" /> Sair
             </button>
          </div>

          {/* Nav Tabs */}
          <div className="flex border-b border-slate-800 mb-8">
             <button 
                onClick={() => setActiveTab('leads')}
                className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'leads' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-400 hover:text-white'}`}
             >
                <Users className="w-4 h-4" /> CRM Leads
             </button>
             <button 
                onClick={() => setActiveTab('news')}
                className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'news' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-400 hover:text-white'}`}
             >
                <FileText className="w-4 h-4" /> Notícias (CMS)
             </button>
          </div>

          {/* Content */}
          {activeTab === 'leads' && (
             <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                   <h2 className="font-bold text-white flex items-center gap-2"><Filter className="w-4 h-4"/> Leads Recentes</h2>
                   <div className="relative">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input type="text" placeholder="Buscar por nome..." className="bg-slate-950 border border-slate-700 rounded-full pl-9 pr-4 py-2 text-sm text-white focus:border-emerald-500 outline-none w-64" />
                   </div>
                </div>
                
                {loadingLeads ? (
                   <div className="p-12 text-center"><Loader2 className="w-8 h-8 text-emerald-500 animate-spin mx-auto" /></div>
                ) : leads.length === 0 ? (
                   <div className="p-12 text-center text-slate-500">Nenhum lead encontrado ainda.</div>
                ) : (
                   <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider">
                               <th className="p-4 font-semibold">Data</th>
                               <th className="p-4 font-semibold">Nome / Empresa</th>
                               <th className="p-4 font-semibold">Contato</th>
                               <th className="p-4 font-semibold">Mensagem / Detalhes</th>
                               <th className="p-4 font-semibold">Status</th>
                               <th className="p-4 font-semibold text-right">Ação</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800 text-sm">
                            {leads.map((lead) => (
                               <tr key={lead.id} className="hover:bg-slate-800/50 transition-colors">
                                  <td className="p-4 text-slate-400 whitespace-nowrap">
                                     {new Date(lead.created_at).toLocaleDateString('pt-BR')} <br/>
                                     <span className="text-xs">{new Date(lead.created_at).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</span>
                                  </td>
                                  <td className="p-4">
                                     <div className="font-bold text-white">{lead.name}</div>
                                     <div className="text-xs text-emerald-500">{lead.company || 'Pessoa Física'}</div>
                                  </td>
                                  <td className="p-4 text-slate-300">
                                     <div className="flex items-center gap-1">{lead.email}</div>
                                     <div className="text-xs text-slate-500 mt-1">{lead.phone}</div>
                                  </td>
                                  <td className="p-4 text-slate-400 max-w-xs truncate" title={lead.message}>
                                     {lead.message || '-'}
                                  </td>
                                  <td className="p-4">
                                     <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase ${
                                        lead.status === 'novo' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                        lead.status === 'convertido' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                        lead.status === 'perdido' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                        'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                     }`}>
                                        {lead.status.replace('_', ' ')}
                                     </span>
                                  </td>
                                  <td className="p-4 text-right">
                                     <div className="flex justify-end gap-2">
                                        <button onClick={() => updateLeadStatus(lead.id, 'em_atendimento')} title="Atender" className="p-2 hover:bg-orange-500/20 text-slate-400 hover:text-orange-500 rounded"><Clock className="w-4 h-4"/></button>
                                        <button onClick={() => updateLeadStatus(lead.id, 'convertido')} title="Converter" className="p-2 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-500 rounded"><CheckCircle className="w-4 h-4"/></button>
                                        <button onClick={() => updateLeadStatus(lead.id, 'perdido')} title="Arquivar" className="p-2 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded"><XCircle className="w-4 h-4"/></button>
                                     </div>
                                  </td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                )}
             </div>
          )}

          {activeTab === 'news' && (
             <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-xl">
                <FileText className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">CMS de Notícias</h3>
                <p className="text-slate-500">Funcionalidade em desenvolvimento. Em breve você poderá publicar artigos no blog.</p>
             </div>
          )}
       </div>
    </div>
  );
};

export default Admin;