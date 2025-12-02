import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingDown, Clock, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useAuth } from '../../contexts/AuthContext';
import { SaaSService } from '../../services/supabase';
import { ConsumerUnit } from '../../types';

const Consumption: React.FC = () => {
  const { user } = useAuth();
  const [units, setUnits] = useState<ConsumerUnit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [telemetryData, setTelemetryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) loadUnits();
  }, [user]);

  useEffect(() => {
    if (selectedUnit) loadTelemetry(selectedUnit);
  }, [selectedUnit]);

  const loadUnits = async () => {
    if (!user) return;
    const myUnits = await SaaSService.getMyUnits(user.id);
    setUnits(myUnits);
    if (myUnits.length > 0) setSelectedUnit(myUnits[0].id);
    else setLoading(false);
  };

  const loadTelemetry = async (unitId: number) => {
    setLoading(true);
    const data = await SaaSService.getTelemetryData(unitId);
    setTelemetryData(data);
    setLoading(false);
  };

  if (loading && units.length === 0) return <div className="p-8 text-center text-slate-500">Carregando unidades...</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" /> Telemetria Avançada
          </h1>
          <p className="text-slate-400 text-sm">Análise detalhada de ponta, fora de ponta e demanda.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400">Unidade:</span>
          <select 
            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-emerald-500"
            value={selectedUnit || ''}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
          >
            {units.map(u => <option key={u.id} value={u.id}>{u.name} ({u.uc_code})</option>)}
          </select>
        </div>
      </div>

      {telemetryData.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">Consumo Diário (Ponta vs Fora Ponta)</h3>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={telemetryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="day" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}
                      cursor={{ fill: '#1e293b' }}
                    />
                    <Legend />
                    <Bar dataKey="foraPonta" name="Fora de Ponta (kWh)" stackId="a" fill="#10B981" />
                    <Bar dataKey="ponta" name="Ponta (kWh)" stackId="a" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                 <h3 className="text-lg font-bold text-white mb-4">Demanda Máxima</h3>
                 <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={telemetryData}>
                       <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                       <XAxis dataKey="day" hide />
                       <YAxis stroke="#64748b" domain={['dataMin', 'dataMax']} />
                       <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                       <Line type="monotone" dataKey="demandMax" stroke="#22D3EE" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                 </div>
                 <p className="text-xs text-center text-slate-500 mt-2">Pico registrado nos últimos 30 dias</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                   <div className="inline-flex p-3 rounded-full bg-orange-500/10 mb-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                   </div>
                   <div className="text-2xl font-bold text-white">18h-21h</div>
                   <div className="text-xs text-slate-500 uppercase font-bold">Horário de Ponta</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                   <div className="inline-flex p-3 rounded-full bg-emerald-500/10 mb-2">
                      <TrendingDown className="w-5 h-5 text-emerald-500" />
                   </div>
                   <div className="text-2xl font-bold text-white">-30%</div>
                   <div className="text-xs text-slate-500 uppercase font-bold">Tarifa Verde</div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <div className="p-12 text-center bg-slate-900 rounded-xl border border-slate-800">
           <p className="text-slate-400">Selecione uma unidade para ver a telemetria ou certifique-se de ter dados carregados.</p>
        </div>
      )}
    </div>
  );
};
export default Consumption;