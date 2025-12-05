import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Send,
  Shield,
  Lock,
  Unlock,
  User,
  Sparkles,
  X,
  Minus,
  Maximize2,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { sendMessageToGemini } from '../services/geminiService';
import { AccessLevel } from '../types';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

interface FloatingChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ isOpen, onClose }) => {
  const { user, profile } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Olá! Eu sou a Migrei IA. 🤖\n\nSou especialista em Mercado Livre de Energia. Posso te ajudar a entender sua fatura, explicar regulações ou analisar seu consumo.\n\nPor padrão, **não tenho acesso** aos seus dados financeiros para sua segurança.`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinancialAccessGranted, setIsFinancialAccessGranted] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isFirstRender.current && messages.length > 1) {
      scrollToBottom();
    }
    isFirstRender.current = false;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map((m) => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToGemini(
      userMessage.text,
      history,
      profile?.role === 'client' ? AccessLevel.CLIENT : AccessLevel.BASIC,
      user?.id,
      isFinancialAccessGranted,
    );

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  const toggleFinancialAccess = () => {
    if (!isFinancialAccessGranted) {
      setShowPermissionModal(true);
    } else {
      setIsFinancialAccessGranted(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: '🔒 **Modo Privacidade Ativado.** Desconectei o acesso aos seus dados financeiros.',
          timestamp: new Date(),
        },
      ]);
    }
  };

  const confirmAccess = () => {
    setIsFinancialAccessGranted(true);
    setShowPermissionModal(false);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'model',
        text: '🔓 **Modo Consultor Financeiro Ativado.** Agora consigo analisar suas faturas e consumo.',
        timestamp: new Date(),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 w-[450px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Migrei IA</h3>
                  <p className="text-xs text-emerald-100">
                    {isLoading ? 'Digitando...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  aria-label={isMinimized ? "Maximizar chat" : "Minimizar chat"}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-5 h-5 text-white" />
                  ) : (
                    <Minus className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={onClose}
                  aria-label="Fechar chat"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Financial Access Toggle */}
                {user && (
                  <div className="bg-slate-800/50 border-b border-slate-700 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-slate-400" />
                      <p className="text-xs text-slate-300">
                        {isFinancialAccessGranted ? 'Acesso a faturas liberado' : 'Modo privacidade'}
                      </p>
                    </div>
                    <button
                      onClick={toggleFinancialAccess}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center ${
                        isFinancialAccessGranted ? 'bg-emerald-500' : 'bg-slate-600'
                      }`}
                    >
                      <div
                        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                          isFinancialAccessGranted ? 'translate-x-6' : 'translate-x-0.5'
                        }`}
                      >
                        {isFinancialAccessGranted ? (
                          <Unlock className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Lock className="w-3 h-3 text-slate-500" />
                        )}
                      </div>
                    </button>
                  </div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          msg.role === 'user'
                            ? 'bg-slate-700'
                            : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          <User className="w-4 h-4 text-slate-300" />
                        ) : (
                          <Sparkles className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                          msg.role === 'user'
                            ? 'bg-slate-800 text-slate-200 rounded-tr-none'
                            : 'bg-slate-900 border border-slate-700 text-slate-300 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white animate-pulse" />
                      </div>
                      <div className="bg-slate-900 border border-slate-700 p-3 rounded-2xl flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="bg-slate-900 border-t border-slate-700 p-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 focus:border-emerald-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    aria-label="Enviar mensagem"
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-lg transition-all"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Permission Modal */}
      <AnimatePresence>
        {showPermissionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={() => setShowPermissionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 max-w-md w-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Autorizar Acesso aos Dados Financeiros?
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    A Migrei IA precisará acessar suas faturas e histórico de consumo para
                    responder suas perguntas com mais precisão.
                  </p>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  ✓ Dados lidos apenas no momento da consulta
                  <br />✓ Não armazenados para treinamento
                  <br />✓ Pode revogar acesso a qualquer momento
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPermissionModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmAccess}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all"
                >
                  Autorizar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
