import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Zap } from 'lucide-react';
import { NewsService } from '../services/supabase';
import { NewsItem } from '../types';

const Noticias: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
    // removed unused loading state

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const data = await NewsService.getAll();
    if (data.length > 0) {
        setNews(data);
    } else {
        setNews([
            {
                id: 1,
                title: "MIGREI se torna a primeira Comercializadora Varejista do Brasil",
                summary: "Com a regulamentação da Lei 15.269/2025, a MIGREI é oficialmente a primeira comercializadora varejista habilitada pela ANEEL para atender consumidores dos Grupos A e B no Mercado Livre de Energia.",
                category: "MIGREI",
                image_url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-25",
                featured: true
            },
            {
                id: 2,
                title: "Lei 15.269/2025: A Revolução do Mercado Livre de Energia",
                summary: "Sancionada em 24/11/2025, a nova lei moderniza o setor elétrico e cria o conceito de comercialização varejista, permitindo que consumidores residenciais escolham seu fornecedor de energia em até 36 meses.",
                category: "Regulatório",
                image_url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-24",
                featured: false
            },
            {
                id: 3,
                title: "Grupo A terá acesso ao Mercado Livre em 24 meses",
                summary: "Consumidores industriais e comerciais atendidos em tensão ≥ 2,3 kV poderão migrar para o Ambiente de Contratação Livre a partir de novembro de 2027, com produto padrão e preço de referência.",
                category: "Regulatório",
                image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-26",
                featured: false
            },
            {
                id: 4,
                title: "Produto Padrão: Transparência Total na Comercialização",
                summary: "ANEEL regulamentará produto padrão com preço de referência para facilitar comparação entre ofertas de diferentes comercializadoras varejistas, promovendo competitividade e modicidade tarifária.",
                category: "Educativo",
                image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-27",
                featured: false
            },
            {
                id: 5,
                title: "Supridor de Última Instância garante segurança aos consumidores",
                summary: "A Lei 15.269/2025 cria o mecanismo de Suprimento de Última Instância (SUI), garantindo fornecimento contínuo de energia mesmo em caso de encerramento de representação por comercializadora varejista.",
                category: "Regulatório",
                image_url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-28",
                featured: false
            },
            {
                id: 6,
                title: "Grupo B: Consumidores residenciais no Mercado Livre em 2028",
                summary: "A partir de 2028, consumidores residenciais (Grupo B) poderão escolher livremente seu fornecedor de energia, democratizando o acesso ao Mercado Livre e promovendo competitividade no setor.",
                category: "Mercado",
                image_url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                date: "2025-11-29",
                featured: false
            }
        ]);
    }
        // end of load
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-wide">MIGREI News</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                Inteligência de Mercado
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
                Acompanhe as principais tendências, regulações e novidades do setor elétrico brasileiro.
            </p>
         </div>
      </section>

      <section className="py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Post */}
            {news.filter(n => n.featured).map(item => (
                <div key={item.id} className="mb-12 relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                    <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
                        <div className="h-64 md:h-auto overflow-hidden">
                            <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-bold uppercase rounded-full">{item.category}</span>
                                <span className="text-slate-500 text-sm flex items-center gap-1"><Calendar className="w-3 h-3"/> {new Date(item.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-400 transition-colors">{item.title}</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">{item.summary}</p>
                            <span className="inline-flex items-center text-emerald-500 font-bold gap-2 group-hover:gap-3 transition-all">
                                Ler Matéria Completa <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.filter(n => !n.featured).map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-slate-600 transition-all"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur text-white text-xs font-bold rounded-full border border-slate-700">
                                {item.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                <Calendar className="w-3 h-3" /> {new Date(item.date).toLocaleDateString('pt-BR')}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-400 text-sm line-clamp-3 mb-4">{item.summary}</p>
                            <button className="text-emerald-500 text-sm font-bold hover:underline">Ler mais</button>
                        </div>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Noticias;