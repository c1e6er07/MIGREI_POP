import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, User, Landmark } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link to={to} className={`relative text-sm font-medium transition-colors hover:text-white group ${isActive(to) ? 'text-emerald-400' : 'text-slate-400'}`}>
      {label} <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full ${isActive(to) ? 'w-full' : ''}`}></span>
    </Link>
  );
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group shrink-0"> 
            <div className="relative"> <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <img src={LOGO_URL} alt="MIGREI Logo" className="h-10 w-auto object-contain relative z-10" /> </div>
            <div className="flex flex-col"> <span className="text-lg font-display font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">MIGREI</span> <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-none group-hover:text-emerald-500 transition-colors">Comercializadora Varejista</span> </div> 
          </Link>
          <nav className="hidden lg:flex items-center space-x-8"> <NavLink to="/" label="Início" /> <NavLink to="/sobre" label="Quem Somos" /> <NavLink to="/empresas" label="Para Empresas" /> <div className="h-4 w-px bg-slate-800 mx-2"></div> <NavLink to="/calculadora" label="Calculadora" /> <NavLink to="/noticias" label="News" /> <NavLink to="/contato" label="Contato" /> </nav>
          <div className="hidden lg:flex items-center gap-4"> 
            <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl mr-2">
                <Link to="/migrei-bank" className="group relative p-2 rounded-lg hover:bg-slate-800 transition-colors"> <Landmark className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" /> <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700"> MIGREI Bank </span> </Link>
                <div className="w-px h-4 bg-slate-800"></div>
                <Link to="/migrei-ia" className="group relative p-2 rounded-lg hover:bg-slate-800 transition-colors"> <Bot className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" /> <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700"> Migrei IA </span> </Link>
            </div>
            <Link to="/login" className="group relative inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-slate-950 text-sm font-bold rounded-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 overflow-hidden"> <div className="relative flex items-center z-10"> <User className="w-4 h-4 mr-2" /> Portal do Cliente </div> </Link> 
          </div>
          <div className="lg:hidden"> <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"> {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div>
        </div>
      </div>
      {isOpen && ( <div className="lg:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top-5"> <div className="px-4 pt-4 pb-6 space-y-2"> <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">Início</Link> <Link to="/sobre" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">Quem Somos</Link> <Link to="/empresas" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">Para Empresas</Link> <Link to="/migrei-bank" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-3 rounded-lg text-emerald-400 bg-emerald-900/10 border border-emerald-500/20 font-bold mb-2"> <Landmark className="w-4 h-4 mr-3" /> MIGREI Bank </Link> <Link to="/migrei-ia" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-3 rounded-lg text-indigo-400 bg-indigo-900/10 border border-indigo-500/20 font-bold mb-4"> <Bot className="w-4 h-4 mr-3" /> Migrei IA </Link> <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 transition-colors"> Acessar Portal do Cliente </Link> </div> </div> )}
    </header>
  );
};
export default Header;