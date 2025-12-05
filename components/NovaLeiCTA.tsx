import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  ZoomIn,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface NovaLeiCTAProps {
  variant?: 'full' | 'compact' | 'hero';
  className?: string;
}

// Componente Modal/Lightbox para visualização da imagem
interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ isOpen, onClose, imageUrl }) => {
  const handleOpenInNewTab = () => {
    window.open(imageUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Backdrop escuro com blur */}
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />

          {/* Container do conteúdo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com botões */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Nova Lei do Mercado Livre de Energia
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Lei 15.269/2025 - Infográfico Explicativo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Botão Abrir em Nova Aba */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenInNewTab}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Abrir em Nova Aba</span>
                </motion.button>

                {/* Botão Fechar */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg border border-slate-700 hover:border-red-500/50 transition-all"
                  aria-label="Fechar visualização"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Container da imagem com scroll se necessário */}
            <div className="relative flex-1 overflow-auto rounded-2xl bg-slate-900/50 border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl pointer-events-none" />

              <img
                src={imageUrl}
                alt="Infográfico Nova Lei do Mercado Livre de Energia 2025"
                className="relative w-full h-auto object-contain p-4"
              />
            </div>

            {/* Footer com dicas */}
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-slate-800 rounded text-xs font-mono">ESC</kbd>
                para fechar
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <kbd className="px-2 py-1 bg-slate-800 rounded text-xs font-mono">Clique fora</kbd>
                para fechar
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NovaLeiCTA: React.FC<NovaLeiCTAProps> = ({ variant = 'full', className = '' }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageUrl =
    'https://kbcziosidwyvlornbaxo.supabase.co/storage/v1/object/sign/Migrei/nova_lei.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWM5MDJjNy1mNDI1LTQ4NTItODY5ZC1kZTJkY2I2ZDQzMDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNaWdyZWkvbm92YV9sZWkucG5nIiwiaWF0IjoxNzY0ODkwMDM4LCJleHAiOjE3OTY0MjYwMzh9.GH70Pg9EjmNeNrbFMYLCKxs9bUZAinS9NaC-O2gFhko';

  // Event listener para fechar com ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Previne scroll do body
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  if (variant === 'hero') {
    return (
      <>
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          imageUrl={imageUrl}
        />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative py-20 overflow-hidden ${className}`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-amber-500/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image with glow effect - CLICÁVEL */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative cursor-pointer group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border-2 border-yellow-500/30 group-hover:border-yellow-500/50 shadow-2xl shadow-yellow-500/20 transition-all">
                  <img
                    src={imageUrl}
                    alt="Nova Lei do Mercado Livre de Energia"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  {/* Overlay de zoom no hover */}
                  <div className="absolute inset-6 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                    <div className="bg-yellow-500 p-4 rounded-full shadow-xl">
                      <ZoomIn className="w-8 h-8 text-slate-950" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 px-6 py-3 rounded-full font-black text-sm shadow-xl animate-bounce">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    NOVA LEI 2025
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-950/80 to-orange-950/80 border-2 border-yellow-400/60 rounded-full mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 text-sm font-black uppercase tracking-wide">
                    Momento Histórico
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-tight">
                  Nova Lei Revoluciona o{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400">
                    Mercado de Energia
                  </span>
                </h2>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Agora{' '}
                  <span className="text-yellow-400 font-bold">
                    sua empresa pode economizar até 40%
                  </span>{' '}
                  na conta de luz! A nova legislação de 2025 ampliou o acesso ao Mercado Livre de
                  Energia para empresas de menor porte.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-slate-900/60 backdrop-blur-sm p-5 rounded-xl border border-yellow-500/30 group hover:border-yellow-500/50 transition-all">
                    <div className="bg-yellow-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Mais Empresas Elegíveis</h4>
                      <p className="text-slate-400 text-sm">
                        Consumidores com demanda a partir de{' '}
                        <span className="text-yellow-400 font-bold">500 kW</span> já podem migrar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-900/60 backdrop-blur-sm p-5 rounded-xl border border-orange-500/30 group hover:border-orange-500/50 transition-all">
                    <div className="bg-orange-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Economia Imediata</h4>
                      <p className="text-slate-400 text-sm">
                        Reduza de <span className="text-orange-400 font-bold">30% a 40%</span> seus
                        custos de energia já no primeiro ano
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-900/60 backdrop-blur-sm p-5 rounded-xl border border-amber-500/30 group hover:border-amber-500/50 transition-all">
                    <div className="bg-amber-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Processo Simplificado</h4>
                      <p className="text-slate-400 text-sm">
                        A MIGREI cuida de tudo: análise, documentação e migração completa
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/empresas" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:from-yellow-400 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-lg px-8 py-5 rounded-xl shadow-2xl shadow-yellow-500/40 flex items-center justify-center gap-3 transition-all"
                    >
                      <Sparkles className="w-5 h-5" />
                      Descubra Sua Economia
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link to="/calculadora" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-8 py-5 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/50 flex items-center justify-center gap-3 transition-all"
                    >
                      Calcular Economia
                    </motion.button>
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>
                    Diagnóstico <span className="text-yellow-400 font-bold">100% Gratuito</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </>
    );
  }

  if (variant === 'compact') {
    return (
      <>
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          imageUrl={imageUrl}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border-2 border-yellow-500/30 overflow-hidden ${className}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-[300px_1fr] gap-8 items-center">
            {/* Imagem clicável com hover effect */}
            <motion.div
              className="relative cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={imageUrl}
                alt="Nova Lei"
                className="relative w-full h-auto rounded-xl shadow-xl border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all"
              />
              {/* Overlay de zoom no hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <div className="bg-yellow-500 p-3 rounded-full shadow-xl">
                  <ZoomIn className="w-6 h-6 text-slate-950" />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Clique para ampliar
              </div>
            </motion.div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-xs uppercase">Nova Lei 2025</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Sua Empresa Agora Pode Economizar <span className="text-yellow-400">Até 40%</span>
              </h3>

              <p className="text-slate-400 mb-6">
                Com a nova legislação, empresas menores podem acessar o Mercado Livre de Energia e
                reduzir drasticamente os custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <ZoomIn className="w-4 h-4" />
                  Ver Detalhes
                </motion.button>

                <Link to="/calculadora">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg border border-yellow-500/30 hover:border-yellow-500/50 flex items-center justify-center gap-2 transition-all"
                  >
                    Calcular Economia
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              <p className="text-slate-400 text-xs mt-3">
                Infográfico completo + simulação rápida. Sem dados de pagamento, diagnóstico
                gratuito.
              </p>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Default 'full' variant
  return (
    <>
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageUrl={imageUrl}
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative py-16 ${className}`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-10 rounded-3xl border-2 border-yellow-500/40 overflow-hidden shadow-2xl shadow-yellow-500/20">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Imagem clicável com hover effect */}
              <motion.div
                className="cursor-pointer group"
                onClick={() => setIsLightboxOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt="Nova Lei do Mercado Livre"
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 border-yellow-500/30 group-hover:border-yellow-500/50 transition-all"
                  />
                  {/* Overlay de zoom no hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                    <div className="bg-yellow-500 p-4 rounded-full shadow-xl">
                      <ZoomIn className="w-8 h-8 text-slate-950" />
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    Clique para ampliar
                  </div>
                </div>
              </motion.div>

              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/20 border-2 border-yellow-400/60 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-black text-sm uppercase">
                    Legislação 2025
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Nova Lei Abre as Portas do{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Mercado Livre
                  </span>
                </h2>

                <p className="text-lg text-slate-300 mb-6">
                  Sua empresa pode economizar{' '}
                  <span className="text-yellow-400 font-bold">até 40%</span> na conta de energia. A
                  MIGREI torna esse processo simples e rápido.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>
                      Empresas com <strong className="text-white">500 kW</strong> já podem migrar
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>
                      Processo de migração <strong className="text-white">100% assistido</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>
                      Economia imediata de <strong className="text-white">30-40%</strong>
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-6 py-4 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 flex items-center justify-center gap-2 transition-all"
                  >
                    <ZoomIn className="w-5 h-5" />
                    Ver Detalhes
                  </motion.button>

                  <Link to="/empresas" className="flex-1">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-yellow-500/30 flex items-center justify-center gap-3 transition-all hover:scale-105">
                      <Sparkles className="w-5 h-5" />
                      Aproveitar Oportunidade
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default NovaLeiCTA;
