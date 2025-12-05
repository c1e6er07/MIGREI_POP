import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  AlertCircle,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useAuth } from '../../contexts/AuthContext';
import { SaaSService } from '../../services/supabase';
import { DashboardStats, Invoice } from '../../types';
import { Link } from 'react-router-dom';
const Overview: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentInvoices, setRecentInvoices] = useState<Invoice[]>([]);
  const [pendingInvoices, setPendingInvoices] = useState<number>(0);
  const [chartData, setChartData] = useState<
    Array<{ name: string; kwh: number; ponta: number; foraPonta: number }>
  >([]);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    if (!user) return;

    try {
      const dashboardStats = await SaaSService.getDashboardStats(user.id);
      setStats(dashboardStats);

      const invoices = await SaaSService.getAllInvoices(user.id);
      setRecentInvoices(invoices.slice(0, 5));
      setPendingInvoices(invoices.filter((i) => i.status === 'pending').length);

      const graphData = invoices
        .map((inv) => ({
          name: new Date(inv.month).toLocaleDateString('pt-BR', { month: 'short' }),
          kwh: inv.consumption_kwh,
          ponta: inv.consumption_kwh * 0.3,
          foraPonta: inv.consumption_kwh * 0.7,
        }))
        .reverse();

      setChartData(graphData);
    } catch (error) {
      console.error('Failed to load dashboard data', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, fetchData]);
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  const kpiCards = [
    {
      title: 'Economia Acumulada',
      value: stats ? formatCurrency(stats.totalSavings) : 'R$ 0,00',
      icon: TrendingUp,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      trend: '+12.5%',
      trendUp: true,
    },
    {
      title: 'Consumo Total',
      value: stats ? `${stats.totalConsumption.toLocaleString()} kWh` : '0 kWh',
      icon: Zap,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      trend: '-5.2%',
      trendUp: false,
    },
    {
      title: 'Última Fatura',
      value: stats ? formatCurrency(stats.lastInvoiceValue) : 'R$ 0,00',
      icon: DollarSign,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      trend: 'Vencimento em 5 dias',
      trendUp: null,
    },
    {
      title: 'Unidades Ativas',
      value: stats?.activeUnits || 0,
      icon: Activity,
      color: 'text-slate-200',
      bg: 'bg-slate-800',
      border: 'border-slate-700',
      trend: 'Operação Normal',
      trendUp: true,
    },
  ];
  if (loading)
    return (
      <div className="flex justify-center p-12">
        <div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full"></div>
      </div>
    );
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {' '}
        <div>
          {' '}
          <h1 className="text-2xl font-bold text-white">Visão Geral</h1>{' '}
          <p className="text-slate-400 text-sm">
            Bem-vindo ao painel de controle da sua energia.
          </p>{' '}
        </div>{' '}
        <div className="mt-4 md:mt-0 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
          {' '}
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>{' '}
          <span className="text-xs font-bold text-emerald-400 uppercase">Ambiente Seguro</span>{' '}
        </div>{' '}
      </div>
      {pendingInvoices > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-slate-900 to-slate-950 border border-orange-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-orange-500/5"
        >
          {' '}
          <div className="flex items-center gap-4">
            {' '}
            <div className="p-3 bg-orange-500/10 rounded-full text-orange-500 animate-pulse">
              {' '}
              <AlertCircle className="w-6 h-6" />{' '}
            </div>{' '}
            <div>
              {' '}
              <h3 className="font-bold text-white text-lg">
                Você tem {pendingInvoices} faturas pendentes
              </h3>{' '}
              <p className="text-slate-400 text-sm">
                Evite multas e regularize seus pagamentos agora via PIX ou Cart�o.
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <Link to="/app/financeiro">
            {' '}
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold rounded-lg shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
              {' '}
              <CreditCard className="w-5 h-5" /> Acessar Financeiro{' '}
              <ArrowRight className="w-4 h-4" />{' '}
            </button>{' '}
          </Link>{' '}
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {' '}
        {kpiCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl border ${card.border} ${card.bg} backdrop-blur-sm relative overflow-hidden group`}
          >
            {' '}
            <div className="flex justify-between items-start mb-4">
              {' '}
              <div className={`p-2 rounded-lg bg-slate-950/30 ${card.color}`}>
                {' '}
                <card.icon className="w-6 h-6" />{' '}
              </div>{' '}
              {card.trendUp !== null && (
                <div
                  className={`flex items-center gap-1 text-xs font-bold ${card.trendUp ? 'text-emerald-400' : 'text-red-400'}`}
                >
                  {' '}
                  {card.trendUp ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}{' '}
                  {card.trend}{' '}
                </div>
              )}{' '}
            </div>{' '}
            <div>
              {' '}
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                {card.title}
              </p>{' '}
              <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">
                {card.value}
              </h3>{' '}
            </div>{' '}
          </motion.div>
        ))}{' '}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6"
        >
          {' '}
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            {' '}
            <Activity className="w-5 h-5 text-emerald-500" /> Perfil de Consumo (Últimos 6
            meses){' '}
          </h3>{' '}
          <div className="h-[300px] w-full">
            {' '}
            <ResponsiveContainer width="100%" height="100%">
              {' '}
              <AreaChart data={chartData}>
                {' '}
                <defs>
                  {' '}
                  <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
                    {' '}
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />{' '}
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />{' '}
                  </linearGradient>{' '}
                </defs>{' '}
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />{' '}
                <XAxis
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />{' '}
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value / 1000}k`}
                />{' '}
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#1e293b',
                    borderRadius: '8px',
                  }}
                  itemStyle={{ color: '#fff' }}
                />{' '}
                <Area
                  type="monotone"
                  dataKey="kwh"
                  stroke="#10B981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorKwh)"
                />{' '}
              </AreaChart>{' '}
            </ResponsiveContainer>{' '}
          </div>{' '}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6"
        >
          {' '}
          <div className="flex justify-between items-center mb-6">
            {' '}
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              {' '}
              <FileText className="w-5 h-5 text-orange-500" /> Últimas Faturas{' '}
            </h3>{' '}
            <Link
              to="/app/faturas"
              className="text-xs text-emerald-500 hover:text-emerald-400 font-medium"
            >
              Ver todas
            </Link>{' '}
          </div>{' '}
          <div className="space-y-4">
            {' '}
            {recentInvoices.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                {' '}
                <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />{' '}
                <p className="text-sm">Nenhuma fatura encontrada.</p>{' '}
                <Link to="/app/config" className="text-xs text-emerald-500 underline mt-2 block">
                  Gerar dados de teste
                </Link>{' '}
              </div>
            ) : (
              recentInvoices.map((inv) => (
                <div
                  key={inv.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {' '}
                  <div className="flex items-center gap-3">
                    {' '}
                    <div
                      className={`w-2 h-2 rounded-full ${inv.status === 'paid' ? 'bg-emerald-500' : 'bg-orange-500'}`}
                    ></div>{' '}
                    <div>
                      {' '}
                      <p className="text-sm font-medium text-white">
                        {' '}
                        {new Date(inv.month).toLocaleDateString('pt-BR', {
                          month: 'long',
                          year: 'numeric',
                        })}{' '}
                      </p>{' '}
                      <p className="text-xs text-slate-500">{inv.consumer_units?.name}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className="text-right">
                    {' '}
                    <p className="text-sm font-bold text-white">
                      {formatCurrency(inv.total_value)}
                    </p>{' '}
                    <p
                      className={`text-[10px] uppercase font-bold ${inv.status === 'paid' ? 'text-emerald-500' : 'text-orange-500'}`}
                    >
                      {' '}
                      {inv.status === 'paid' ? 'Pago' : 'Pendente'}{' '}
                    </p>{' '}
                  </div>{' '}
                </div>
              ))
            )}{' '}
          </div>{' '}
        </motion.div>
      </div>
    </div>
  );
};
export default Overview;
