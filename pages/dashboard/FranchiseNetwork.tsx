import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, MapPin, TrendingUp, Users, DollarSign, ChevronRight, Crown, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FranchiseNode } from '../../types';

const FranchiseNetwork: React.FC = () => {
  const currentUserTier = 'state'; 
  const currentRegion = 'São Paulo';
  const [subFranchises, setSubFranchises] = useState<FranchiseNode[]>([
    { id: '1', name: 'MIGREI Campinas', tier: 'city', location: 'Campinas/SP', activeClients: 45, monthlyRevenue: 28500, status: 'active' },
    { id: '2', name: 'MIGREI Ribeirão', tier: 'city', location: 'Ribeirão Preto/SP', activeClients: 32, monthlyRevenue: 19200, status: 'active' },
    { id: '3', name: 'MIGREI Santos', tier: 'city', location: 'Santos/SP', activeClients: 15, monthlyRevenue: 8500, status: 'warning' },
    { id: '4', name: 'MIGREI S. J. Campos', tier: 'city', location: 'S. J. Campos/SP', activeClients: 28, monthlyRevenue: 15400, status: 'active' },
    { id: '5', name: 'MIGREI Sorocaba', tier: 'city', location: 'Sorocaba/SP', activeClients: 10, monthlyRevenue: 5000, status: 'active' },
  ]);

  const totalRevenue = subFranchises.reduce((acc, curr) => acc + curr.monthlyRevenue, 0);
  const totalClients = subFranchises.reduce((acc, curr) => acc + curr.activeClients, 0);
  const myRoyalties = totalRevenue * 0.15; 
  const formatMoney = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const chartData = subFranchises.map(f => ({ name: f.location.split('/')[0], revenue: f.monthlyRevenue })).sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-bold uppercase rounded-full tracking-wide">
              Franquia {currentUserTier.toUpperCase()}
            </span>
            <span className="text-slate-500 text-xs">|</span>
            <span className="text-slate-400 text-xs">{currentRegion}</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Network className="w-6 h-6 text-emerald-500" /> Gestão da Rede
          </h1>
          <p className="text-slate-400 text-sm">Monitore o desempenho das suas unidades filiadas em tempo real.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-emerald-500 text-white text-sm font-bold rounded-lg transition-all flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-500" /> Mapa de Calor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <DollarSign className="w-16 h-16 text-slate-400" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Faturamento da Rede (Bruto)</p>
          <h3 className="text-3xl font-black text-white">{formatMoney(totalRevenue)}</h3>
          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-500/10 inline-flex px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" /> +12% vs mês anterior
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}} className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Crown className="w-16 h-16 text-emerald-500" />
          </div>
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
            <Crown className="w-3 h-3" /> Meus Royalties (Smart Split)
          </p>
          <h3 className="text-3xl font-black text-white">{formatMoney(myRoyalties)}</h3>
          <p className="text-xs text-slate-500 mt-2">Repasse automático via MIGREI Bank.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.2}} className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Users className="w-16 h-16 text-cyan-400" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Carteira Total de Clientes</p>
          <h3 className="text-3xl font-black text-white">{totalClients}</h3>
          <p className="text-xs text-slate-500 mt-2">Empresas migradas na sua região.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white">Desempenho por Unidade (City)</h3>
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{subFranchises.length} Unidades</span>
          </div>
          <div className="divide-y divide-slate-800">
            {subFranchises.map((franchise) => (
              <div key={franchise.id} className="p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-900 ${franchise.status === 'active' ? 'bg-emerald-500' : 'bg-orange-500'}`}>
                    {franchise.name.charAt(7)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{franchise.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {franchise.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{formatMoney(franchise.monthlyRevenue)}</p>
                  <p className="text-xs text-slate-500">{franchise.activeClients} Clientes Ativos</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="font-bold text-white mb-6">Ranking de Faturamento</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} tick={{fontSize: 11}} interval={0} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                <Bar dataKey="revenue" radius={[0, 4, 4, 0]} barSize={20}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10B981' : '#334155'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-3">
             <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
             <p className="text-xs text-slate-400">
                Sua rede está 100% em compliance com as normas da Matriz.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FranchiseNetwork;