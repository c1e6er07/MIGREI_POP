import React from 'react';
import { FileBarChart, Download, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Relatórios Gerenciais</h1>
          <p className="text-slate-400 text-sm">Exports e análises consolidadas.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Relatório de Economia Anual', date: 'Jan - Dez 2024', type: 'PDF' },
          { title: 'Consumo Ponta vs Fora Ponta', date: 'Últimos 30 dias', type: 'XLSX' },
          { title: 'Auditoria de Faturas', date: 'Completo', type: 'PDF' },
        ].map((rep, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                <FileBarChart className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-slate-950 px-2 py-1 rounded text-slate-400">
                {rep.type}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{rep.title}</h3>
            <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {rep.date}
            </p>
            <button className="w-full py-2 bg-slate-950 border border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-slate-300 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-bold">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reports;
