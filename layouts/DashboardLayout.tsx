import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Zap, Settings, LogOut, Menu, User, Bell, LineChart, CreditCard, Network, GraduationCap, ShieldAlert } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LOGO_URL } from '../constants';
import { NotificationService } from '../services/supabase';
import { Notification } from '../types';
const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { profile, user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignOut = async () => { await signOut(); navigate('/login'); };
  useEffect(() => { if (user) { NotificationService.getAll(user.id).then(setNotifications); } }, [user]);
  const handleMarkAllRead = async () => {
    if (user) {
      await NotificationService.markAllAsRead(user.id);
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    }
  };
  
  const navItems = [ 
    { label: 'Visão Geral', path: '/app', icon: LayoutDashboard }, 
    { label: 'Minhas Faturas', path: '/app/faturas', icon: FileText }, 
    { label: 'Financeiro & Pagamentos', path: '/app/financeiro', icon: CreditCard }, 
    { label: 'Consumo', path: '/app/consumo', icon: Zap }, 
    { label: 'Relatórios', path: '/app/relatorios', icon: LineChart },
    { label: 'Instituto Migrei', path: '/app/instituto', icon: GraduationCap },
    { label: 'Compliance & Riscos', path: '/app/compliance', icon: ShieldAlert },
    { label: 'Configurações', path: '/app/config', icon: Settings } 
  ];
  if (profile?.role === 'franchisee' || profile?.role === 'admin') {
      navItems.splice(1, 0, { label: 'Minha Rede (Hierarquia)', path: '/app/rede', icon: Network });
  }
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="min-h-screen bg-slate-950 flex text-slate-100 font-sans">
      <aside className={`hidden md:flex flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-20 flex items-center justify-center border-b border-slate-800 px-4"> {isSidebarOpen ? <img src={LOGO_URL} className="h-8 w-auto object-contain" /> : <Zap className="w-8 h-8 text-emerald-500" />} </div>
        <nav className="flex-1 py-6 px-3 space-y-2">
          {navItems.map((item) => ( <Link key={item.path} to={item.path} className={`flex items-center px-3 py-3 rounded-lg transition-all group ${isActive(item.path) ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}> <item.icon className={`w-6 h-6 shrink-0 ${isActive(item.path) ? 'text-emerald-500' : 'text-slate-500 group-hover:text-white'}`} /> {isSidebarOpen && <span className="ml-3 font-medium whitespace-nowrap">{item.label}</span>} </Link> ))}
        </nav>
        <div className="p-4 border-t border-slate-800"> <button onClick={handleSignOut} className={`flex items-center w-full px-3 py-3 rounded-lg text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-colors ${!isSidebarOpen && 'justify-center'}`}> <LogOut className="w-5 h-5 shrink-0" /> {isSidebarOpen && <span className="ml-3 font-medium">Sair</span>} </button> </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 z-20 sticky top-0">
           <div className="flex items-center gap-4"> <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hidden md:block p-2 text-slate-400 hover:text-white"> <Menu className="w-6 h-6" /> </button> <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-white"> <Menu className="w-6 h-6" /> </button> <h1 className="text-lg font-bold text-white hidden sm:block"> {navItems.find(i => i.path === location.pathname)?.label || 'Dashboard'} </h1> </div>
           <div className="flex items-center gap-4">
              <div className="relative"> <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2 relative hover:text-white transition-colors ${showNotifications ? 'text-white' : 'text-slate-400'}`}> <Bell className="w-5 h-5" /> {notifications.filter(n=>!n.read).length > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>} </button>
                  {showNotifications && ( <div className="absolute right-0 mt-3 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50"> <div className="p-4 border-b border-slate-800 flex justify-between items-center"> <h3 className="text-sm font-bold text-white">Notificações</h3> <button onClick={handleMarkAllRead} className="text-xs text-emerald-500 hover:text-emerald-400">Marcar lidas</button> </div> <div className="max-h-80 overflow-y-auto"> {notifications.map(n => ( <div key={n.id} className={`p-4 border-b border-slate-800 ${!n.read ? 'bg-slate-800/20' : ''}`}> <p className={`text-sm ${!n.read ? 'font-bold text-white' : 'text-slate-300'}`}>{n.title}</p> <p className="text-xs text-slate-500 mt-1">{n.message}</p> </div> ))} </div> </div> )}
                  {showNotifications && <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>}
              </div>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-700"> <div className="text-right hidden sm:block"> <p className="text-sm font-bold text-white">{profile?.full_name || 'Usuário'}</p> <p className="text-xs text-slate-400 capitalize">{profile?.role === 'franchisee' ? `Franqueado ${profile.franchise_tier || 'City'}` : profile?.role || 'Client'}</p> </div> <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20"> <User className="w-5 h-5" /> </div> </div>
           </div>
        </header>
        {isMobileMenuOpen && ( <div className="fixed inset-0 z-50 md:hidden"> <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div> <div className="absolute inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 p-4 shadow-2xl"> <nav className="space-y-2"> {navItems.map((item) => ( <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white"> <item.icon className="w-5 h-5 mr-3" /> {item.label} </Link> ))} <button onClick={handleSignOut} className="flex items-center w-full px-4 py-3 mt-8 rounded-lg text-red-400 hover:bg-red-500/10"> <LogOut className="w-5 h-5 mr-3" /> Sair </button> </nav> </div> </div> )}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950 relative"> <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-900/5 to-transparent pointer-events-none"></div> <Outlet /> </main>
      </div>
    </div>
  );
};
export default DashboardLayout;