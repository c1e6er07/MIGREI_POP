import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
const FloatingAI: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/migrei-ia' || location.pathname.startsWith('/admin')) return null;
  return (
    <Link to="/migrei-ia" className="fixed bottom-6 right-6 z-40 group">
      <div className="relative"> <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-xl shadow-emerald-500/30 text-white"> <Bot className="w-8 h-8" strokeWidth={1.5} /> </motion.div> </div>
    </Link>
  );
};
export default FloatingAI;