import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingChat from './FloatingChat';

const FloatingAI: React.FC = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (location.pathname.startsWith('/admin') || location.pathname.startsWith('/app')) return null;

  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-40 group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-2xl shadow-emerald-500/50 text-white hover:shadow-emerald-500/70 transition-shadow duration-300"
        >
          <Bot className="w-8 h-8" strokeWidth={2} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.div>
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl border border-emerald-500/20">
            Conversar com Migrei IA
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </button>

      <FloatingChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingAI;
