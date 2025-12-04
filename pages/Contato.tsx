import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
const Contato: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Nossa equipe retornará em breve."); setFormData({ name: '', email: '', subject: '', message: '' }); };
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center"> <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-white mb-6"> Fale com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">MIGREI</span> </motion.h1> <p className="text-xl text-slate-400 max-w-2xl mx-auto"> Para agilidade no atendimento, recomendamos consultar nossa Inteligência Artificial. </p> </div>
      </section>
      <section className="pb-12 pt-12">
          <div className="max-w-4xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-r from-indigo-900/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-indigo-500/10"> <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30 animate-pulse"> <Bot className="w-10 h-10 text-white" /> </div> <div className="flex-1 text-center md:text-left"> <h2 className="text-2xl font-bold text-white mb-2">Dúvidas sobre Energia ou Consultoria?</h2> <p className="text-slate-300 mb-6"> A <strong>Migrei IA</strong> é especializada em Mercado Livre de Energia e pode responder suas perguntas em segundos, 24h por dia. Teste agora! </p> <Link to="/migrei-ia"> <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mx-auto md:mx-0 w-full md:w-auto"> <Bot className="w-5 h-5" /> Falar com Migrei IA Agora </button> </Link> </div> </motion.div>
          </div>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"> <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Atendimento Humano</span> <h3 className="text-xl font-bold text-white mt-2">Ainda precisa falar com um consultor?</h3> </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all"> <div className="flex items-start gap-4"> <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500"> <Phone className="w-6 h-6" /> </div> <div> <h3 className="font-bold text-white mb-1">Central de Atendimento</h3> <p className="text-slate-400 text-sm mb-2">Para clientes e empresas interessadas.</p> <p className="text-white font-mono text-lg">{COMPANY_INFO.whatsapp}</p> </div> </div> </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all"> <div className="flex items-start gap-4"> <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500"> <Mail className="w-6 h-6" /> </div> <div> <h3 className="font-bold text-white mb-1">Email Corporativo</h3> <p className="text-slate-400 text-sm mb-2">Parcerias, imprensa e suporte nível 2.</p> <p className="text-white font-mono">{COMPANY_INFO.email}</p> </div> </div> </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all"> <div className="flex items-start gap-4"> <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500"> <MapPin className="w-6 h-6" /> </div> <div> <h3 className="font-bold text-white mb-1">Sede Administrativa</h3> <p className="text-slate-400 text-sm leading-relaxed"> Av. Paulista, 1000 - Bela Vista<br/> São Paulo - SP, 01310-100 </p> <span className="text-xs text-orange-500 mt-2 block flex items-center gap-1 font-bold"><Clock className="w-3 h-3"/> Seg-Sex: 09h às 18h</span> </div> </div> </div>
                </div>
                <div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3"> <MessageSquare className="w-5 h-5 text-emerald-500" /> Envie sua Mensagem </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5"> <div className="space-y-1"> <label className="text-xs font-bold text-slate-400 uppercase">Nome</label> <input type="text" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all text-sm" placeholder="Seu nome" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /> </div> <div className="space-y-1"> <label className="text-xs font-bold text-slate-400 uppercase">Email</label> <input type="email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all text-sm" placeholder="seu@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /> </div> </div>
                            <div className="space-y-1"> <label className="text-xs font-bold text-slate-400 uppercase">Assunto</label> <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all text-sm" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}> <option value="">Selecione um assunto...</option> <option value="Comercial">Consultoria de Energia</option> <option value="Suporte">Suporte Técnico</option> <option value="Outros">Outros assuntos</option> </select> </div>
                            <div className="space-y-1"> <label className="text-xs font-bold text-slate-400 uppercase">Mensagem</label> <textarea required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all h-32 resize-none text-sm" placeholder="Descreva sua solicitação..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} ></textarea> </div>
                            <button type="submit" className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"> Enviar para Equipe Humana <ArrowRight className="w-4 h-4" /> </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
export default Contato;