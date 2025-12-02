import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, PlayCircle, BookOpen, Award, CheckCircle2, Lock, Clock } from 'lucide-react';

const Instituto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

  const courses = [
    {
      id: 1,
      title: 'Onboarding Franqueado City',
      module: 'Fundamentos',
      duration: '4h 30m',
      progress: 100,
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Técnicas de Venda B2B - Energia',
      module: 'Comercial',
      duration: '6h 15m',
      progress: 45,
      status: 'in_progress',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Regulação do Mercado Livre (ACL)',
      module: 'Técnico Avançado',
      duration: '12h 00m',
      progress: 0,
      status: 'locked',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Gestão Financeira da Franquia',
        module: 'Gestão',
        duration: '3h 45m',
        progress: 0,
        status: 'locked',
        image: 'https://images.unsplash.com/photo-1554224155-9726b30c889f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      }
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-emerald-500" />
            Instituto Migrei
          </h1>
          <p className="text-slate-400 text-sm">Universidade Corporativa - Capacitação Contínua.</p>
        </div>
        
        <div className="flex gap-2 p-1 bg-slate-900 border border-slate-800 rounded-lg">
           <button 
             onClick={() => setActiveTab('courses')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'courses' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'}`}
           >
             Meus Cursos
           </button>
           <button 
             onClick={() => setActiveTab('certificates')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'certificates' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'}`}
           >
             Certificados
           </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <BookOpen className="w-16 h-16 text-white" />
            </div>
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">Progresso Geral</p>
            <h3 className="text-3xl font-black text-white">35%</h3>
            <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
               <div className="h-full bg-indigo-500 w-[35%]"></div>
            </div>
         </div>

         <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-500">
               <Award className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-white">1</h3>
               <p className="text-slate-400 text-sm">Certificação Conquistada</p>
            </div>
         </div>

         <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center gap-4">
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500">
               <Clock className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-white">10h 45m</h3>
               <p className="text-slate-400 text-sm">Horas de Estudo</p>
            </div>
         </div>
      </div>

      {activeTab === 'courses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {courses.map((course) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-600 transition-all ${course.status === 'locked' ? 'opacity-75' : ''}`}
              >
                 <div className="h-40 overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       {course.status === 'locked' ? (
                          <Lock className="w-10 h-10 text-slate-400" />
                       ) : (
                          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                       )}
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 bg-slate-950/80 backdrop-blur text-white text-[10px] font-bold rounded uppercase">
                       {course.module}
                    </div>
                 </div>
                 
                 <div className="p-5">
                    <h3 className="font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                       <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {course.duration}</span>
                       <span>{course.progress}% concluído</span>
                    </div>
                    
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
                       <div 
                         className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`} 
                         style={{ width: `${course.progress}%` }}
                       ></div>
                    </div>

                    <button 
                       disabled={course.status === 'locked'}
                       className={`w-full py-2.5 rounded-lg text-sm font-bold transition-all ${
                          course.status === 'completed' 
                             ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                             : course.status === 'locked'
                             ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                             : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                       }`}
                    >
                       {course.status === 'completed' ? 'Revisar Conteúdo' : course.status === 'locked' ? 'Bloqueado' : 'Continuar Curso'}
                    </button>
                 </div>
              </motion.div>
           ))}
        </div>
      )}

      {activeTab === 'certificates' && (
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
               <Award className="w-12 h-12 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Onboarding Franqueado City</h3>
            <p className="text-slate-400 text-sm mb-6">Concluído em 15 de Março de 2024</p>
            
            <button className="px-6 py-2 border border-slate-600 hover:border-white text-slate-300 hover:text-white rounded-lg transition-colors text-sm font-bold">
               Baixar Certificado (PDF)
            </button>
         </div>
      )}
    </div>
  );
};

export default Instituto;