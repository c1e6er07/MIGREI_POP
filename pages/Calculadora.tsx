import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, TrendingDown, CheckCircle2, Building2, PiggyBank } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import NovaLeiCTA from '../components/NovaLeiCTA';
const Calculadora: React.FC = () => {
  const [billValue, setBillValue] = useState<number>(10000);
  const [voltage, setVoltage] = useState<'A4' | 'A3'>('A4');
  const [distributor, setDistributor] = useState('Enel SP');
  const [savings, setSavings] = useState({ monthly: 0, yearly: 0, fiveYears: 0 });
  type ChartRow = { name: string; value: number; color: string };
  const [chartData, setChartData] = useState<ChartRow[]>([]);
  const SAVINGS_PERCENTAGE = 0.30;
  useEffect(() => {
    const monthlySavings = billValue * SAVINGS_PERCENTAGE;
    const yearlySavings = monthlySavings * 12;
    const fiveYears = yearlySavings * 5;
    setSavings({ monthly: monthlySavings, yearly: yearlySavings, fiveYears: fiveYears });
    setChartData([ { name: 'Custo Atual', value: billValue, color: '#64748b' }, { name: 'Com MIGREI', value: billValue - monthlySavings, color: '#10B981' } ]);
  }, [billValue, voltage]);
  const formatCurrency = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"> <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"> <Calculator className="w-4 h-4 text-emerald-400" /> <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Simulador Oficial</span> </motion.div> <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6"> Quanto sua empresa pode <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">economizar hoje?</span> </h1> <p className="text-slate-400 text-lg max-w-2xl mx-auto"> Faça uma simulação instantânea baseada nas tarifas atuais do Mercado Livre de Energia e descubra o impacto no seu caixa. </p> </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"> <Building2 className="w-5 h-5 text-emerald-500" /> Dados da sua Conta </h3>
               <div className="mb-8"> <label htmlFor="monthly-value" className="flex justify-between text-sm font-bold text-slate-300 mb-4"> <span>Valor Médio Mensal (R$)</span> <span className="text-emerald-400 text-lg">{formatCurrency(billValue)}</span> </label> <input id="monthly-value" type="range" min="2000" max="500000" step="1000" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" /> <div className="flex justify-between text-xs text-slate-500 mt-2"> <span>R$ 2k</span> <span>R$ 500k+</span> </div> </div>
               <div className="grid grid-cols-2 gap-4 mb-6"> <div> <label htmlFor="distributor" className="block text-xs font-bold text-slate-400 uppercase mb-2">Distribuidora</label> <select id="distributor" value={distributor} onChange={(e) => setDistributor(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-3 text-white focus:border-emerald-500 outline-none"> <option value="Enel SP">Enel SP</option> <option value="CPFL">CPFL</option> <option value="Light">Light</option> <option value="Cemig">Cemig</option> <option value="Copel">Copel</option> </select> </div> <div> <label htmlFor="voltage" className="block text-xs font-bold text-slate-400 uppercase mb-2">Tensão</label> <select id="voltage" value={voltage} onChange={(e) => setVoltage(e.target.value as 'A4' | 'A3')} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-3 text-white focus:border-emerald-500 outline-none"> <option value="A4">Alta Tensão (A4)</option> <option value="A3">Alta Tensão (A3)</option> </select> </div> </div>
               <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3"> <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> <p className="text-sm text-slate-300"> Simulação considerando migração para o Mercado Livre no modelo <strong>Varejista</strong> com desconto garantido. </p> </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden group"> <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-emerald-500/20 transition-all"></div> <div className="relative z-10"> <p className="text-slate-400 text-sm font-bold uppercase flex items-center gap-2 mb-2"> <PiggyBank className="w-4 h-4 text-emerald-500" /> Economia Anual </p> <h3 className="text-4xl font-black text-white">{formatCurrency(savings.yearly)}</h3> <p className="text-emerald-400 text-sm mt-2 font-bold">+ {formatCurrency(savings.fiveYears)} em 5 anos</p> </div> </motion.div>
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden"> <p className="text-slate-400 text-sm font-bold uppercase flex items-center gap-2 mb-2"> <TrendingDown className="w-4 h-4 text-cyan-500" /> Redução na Fatura </p> <h3 className="text-4xl font-black text-white">30%</h3> <p className="text-slate-500 text-sm mt-2">Média histórica para {distributor}</p> </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[300px]"> <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Comparativo de Custo Mensal</h3> <ResponsiveContainer width="100%" height="80%"> <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}> <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} /> <XAxis type="number" hide /> <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} tick={{fontSize: 12, fontWeight: 600}} /> <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} formatter={(value: number) => [formatCurrency(value), 'Valor']} /> <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}> {chartData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.color} /> ))} </Bar> </BarChart> </ResponsiveContainer> </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gradient-to-r from-emerald-900/50 to-slate-900 border border-emerald-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"> <div> <h3 className="text-xl font-bold text-white mb-2">Gostou da economia?</h3> <p className="text-slate-300 text-sm">Receba uma proposta formal e detalhada para sua empresa agora.</p> </div> <Link to="/empresas"> <button className="whitespace-nowrap px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 flex items-center gap-2"> <Zap className="w-5 h-5" /> Solicitar Proposta </button> </Link> </motion.div>
          </div>
        </div>
      </div>
      
      {/* Nova Lei CTA - Full variant - Posicionamento estratégico #3 */}
      <NovaLeiCTA variant="full" className="mt-16" />
    </div>
  );
};
export default Calculadora;