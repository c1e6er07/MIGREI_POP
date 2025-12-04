import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL, COMPANY_INFO } from '../constants';
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1"> <div className="mb-6"> <img src={LOGO_URL} alt="MIGREI" className="h-14 w-auto object-contain" /> </div> <p className="text-slate-400 text-sm mb-6 leading-relaxed"> Líder nacional em consultoria para o Mercado Livre de Energia. Transformamos custos em lucro através da inovação e tecnologia. </p> <div className="flex gap-4"> <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5"/></a> <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5"/></a> <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5"/></a> </div> </div>
          <div> <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Soluções</h3> <ul className="space-y-3 text-sm text-slate-400"> <li><Link to="/migrei-bank" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500"/> MIGREI Bank</Link></li> <li><Link to="/empresas" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500"/> Para Empresas</Link></li> <li><Link to="/migrei-ia" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500"/> Migrei IA</Link></li></ul> </div>
          <div> <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Institucional</h3> <ul className="space-y-3 text-sm text-slate-400"> <li><Link to="/" className="hover:text-emerald-400 transition-colors">Início</Link></li> <li><Link to="/sobre" className="hover:text-emerald-400 transition-colors">Quem Somos</Link></li> <li><Link to="/noticias" className="hover:text-emerald-400 transition-colors">Notícias do Setor</Link></li> <li><Link to="/calculadora" className="hover:text-emerald-400 transition-colors">Calculadora de Economia</Link></li> <li><Link to="/contato" className="hover:text-emerald-400 transition-colors">Fale Conosco</Link></li> </ul> </div>
          <div> <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato Oficial</h3> <ul className="space-y-4 text-sm text-slate-400"> <li className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800"> <Phone className="w-4 h-4 text-emerald-500" /> <span className="font-mono">{COMPANY_INFO.whatsapp}</span> </li> <li className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800"> <Mail className="w-4 h-4 text-emerald-500" /> <span>{COMPANY_INFO.email}</span> </li> <li className="flex items-start gap-3"> <MapPin className="w-4 h-4 text-emerald-500 mt-1" /> <div> Av. Paulista, 1000<br/>Bela Vista - São Paulo/SP<span className="block text-xs text-slate-600 mt-1">(Sede Administrativa)</span> </div> </li> </ul> </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MIGREI MLE CONSULT. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center"> <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link> <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link> <Link to="/admin" className="flex items-center gap-1 ml-4 opacity-50 hover:opacity-100 hover:text-white transition-all"> <Lock className="w-3 h-3" /> Acesso Administrativo </Link> </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;