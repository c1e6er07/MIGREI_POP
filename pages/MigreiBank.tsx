import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  ShieldCheck, 
  Split, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Server,
  Globe,
  Fingerprint,
  ArrowRight,
  X,
  FileKey,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MigreiBank: React.FC = () => {
  const [showSecurityModal, setShowSecurityModal] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen overflow-hidden font-sans text-slate-100">
      
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
                 <Landmark className="w-4 h-4 text-emerald-400" />
                 <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Fintech de Energia</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">MIGREI</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bank</span>
              </h1>
              
              <p className="text-slate-300 mb-10 text-xl leading-relaxed">
                A primeira solução financeira integrada ao Mercado Livre de Energia. 
                Pagamentos via <strong>Open Finance</strong>, segurança bancária de nível global e 
                integração com a plataforma MIGREI de repartição automática de receitas.
              </p>

              {/* SECURE ACCESS CARD */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-emerald-500/30 p-8 rounded-3xl shadow-2xl shadow-emerald-900/20 max-w-md">
                <div className="flex items-center gap-3 mb-6 border-b border-emerald-500/20 pb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Área do Cliente</h3>
                    <p className="text-slate-400 text-xs">Acesso criptografado (SSL 256-bits)</p>
                  </div>
                </div>

                <Link to="/app/financeiro">
                   <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
                     <Lock className="w-5 h-5 group-hover:text-white/90 transition-colors" /> 
                     <span>Acessar Portal Financeiro</span>
                     <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                   </button>
                </Link>

                <div className="mt-4 flex justify-between items-center text-[10px] text-slate-500 font-medium uppercase tracking-wide">
                   <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500"/> Dados Protegidos</span>
                   <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500"/> BACEN Regulado</span>
                </div>
              </div>

              {/* SECURITY TECH CTA (UPDATED) */}
              <div className="mt-8 ml-2">
                 <button 
                    onClick={() => setShowSecurityModal(true)}
                    className="group flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 transition-all cursor-pointer"
                 >
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                        <ShieldCheck className="w-5 h-5 text-emerald-500 relative z-10" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                        Conhecer nossa tecnologia de segurança
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/>
                 </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block z-0"
            >
               {/* Abstract App Representation */}
               <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl pointer-events-none"></div>
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white"><Zap className="w-6 h-6" /></div>
                        <div>
                           <div className="text-white font-bold">MIGREI Bank</div>
                           <div className="text-xs text-slate-400">Open Finance Integrado</div>
                        </div>
                     </div>
                     <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> Conectado
                     </div>
                  </div>
                  
                  {/* Transaction Simulation */}
                  <div className="space-y-4">
                     <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-slate-800 rounded-lg"><Server className="w-5 h-5 text-slate-400"/></div>
                           <div>
                              <div className="text-sm font-bold text-white">Fatura Energia #4029</div>
                              <div className="text-xs text-slate-500">Pagamento via Itaú</div>
                           </div>
                        </div>
                        <div className="text-emerald-400 font-bold">- R$ 12.450,00</div>
                     </div>
                     <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-orange-900/20 rounded-lg"><Split className="w-5 h-5 text-orange-500"/></div>
                           <div>
                              <div className="text-sm font-bold text-white">Repartição Automática</div>
                              <div className="text-xs text-slate-500">Pagamento aos Consultores</div>
                           </div>
                        </div>
                        <div className="text-orange-500 font-bold text-xs">PROCESSADO</div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Elements - Corrected Z-Index and Position */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 z-20 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 backdrop-blur-md"
               >
                  <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                  <div className="text-xs font-bold text-white">BACEN</div>
                  <div className="text-[10px] text-slate-400">Regulado</div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="funcionalidades" className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Inovação Financeira
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Tecnologia desenvolvida para eliminar burocracia, aumentar a segurança e garantir a transparência entre MIGREI Core, Consultores, Partners e Clientes.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20">
                 <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Open Finance</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Esqueça boletos e TEDs. Nosso sistema inicia o pagamento diretamente no app do banco do cliente. Sem digitar códigos, sem erros, com confirmação instantânea.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all group shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20">
                 <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                    <Split className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Repartição Automática</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Exclusividade MIGREI. No momento que o cliente paga a fatura, nossa tecnologia separa e envia automaticamente a parte aos consultores e parceiros. Sem planilhas, sem atrasos.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20">
                 <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-500 group-hover:scale-110 transition-transform">
                    <Fingerprint className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Segurança Biométrica</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Não armazenamos senhas. Toda a autenticação é feita no ambiente do banco do usuário (Itaú, Bradesco, Nubank, etc), utilizando a biometria do próprio dispositivo.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECURITY DEEP DIVE */}
      <section className="py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full mb-6">
                     <ShieldCheck className="w-4 h-4 text-emerald-500" />
                     <span className="text-xs font-bold text-white uppercase">Segurança Máxima</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Seus dados blindados.</h2>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                           <h4 className="font-bold text-white text-lg">Criptografia Ponta a Ponta</h4>
                           <p className="text-slate-400 text-sm">Dados trafegam em túneis SSL/TLS de 256 bits, padrão militar de segurança.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                           <h4 className="font-bold text-white text-lg">Compliance Regulatório</h4>
                           <p className="text-slate-400 text-sm">Operação 100% adequada às normas de Iniciação de Pagamentos (ITP) do Banco Central do Brasil.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                           <h4 className="font-bold text-white text-lg">Sem Custódia de Credenciais</h4>
                           <p className="text-slate-400 text-sm">A MIGREI nunca vê nem armazena sua senha bancária. A autenticação ocorre exclusivamente no app do seu banco.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative w-80 h-96 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl border-4 border-slate-950">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-xl z-20"></div>
                     <div className="h-full w-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                        <Lock className="w-16 h-16 text-emerald-500 mb-4 z-10" />
                        <div className="text-white font-bold text-xl z-10">Ambiente Seguro</div>
                        <div className="text-slate-500 text-xs text-center px-4 mt-2 z-10">
                           Conexão criptografada estabelecida com Banco Central.
                        </div>
                        
                        {/* Matrix Effect Background */}
                        <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-emerald-500 p-2 overflow-hidden leading-none break-all">
                           1010101010101010101010101010101010101010101010101
                           0101010101010101010101010101010101010101010101010
                           1010101010101010101010101010101010101010101010101
                           0010101001010101010100101010101010100101010101010
                           1010101010101010101010101010101010101010101010101
                           0101010101010101010101010101010101010101010101010
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-emerald-900/10 border-t border-emerald-500/20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para modernizar sua gestão de energia?</h2>
            <p className="text-slate-300 mb-8 text-lg">
               Clientes MIGREI já economizaram mais de R$ 45 Milhões com segurança e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/app/financeiro">
                  <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105">
                     Acessar Minha Conta
                  </button>
               </Link>
               <Link to="/contato">
                  <button className="px-8 py-4 bg-transparent border border-slate-500 hover:bg-slate-800 text-white font-bold rounded-xl transition-all">
                     Falar com Consultor
                  </button>
               </Link>
            </div>
         </div>
      </section>

      {/* SECURITY DETAILS MODAL */}
      <AnimatePresence>
         {showSecurityModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl relative overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                  <button onClick={() => setShowSecurityModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 z-10">
                     <X className="w-5 h-5" />
                  </button>

                  <div className="p-8">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                           <Shield className="w-8 h-8 text-emerald-500" />
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold text-white">Especificações de Segurança</h2>
                           <p className="text-slate-400 text-sm">MIGREI Bank Core v2.4</p>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <p className="text-slate-300 leading-relaxed border-b border-slate-800 pb-6">
                           Nossa infraestrutura opera sob os mais rigorosos padrões de segurança bancária global, 
                           garantindo que cada transação seja auditável, imutável e privada.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                           <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                 <Lock className="w-4 h-4 text-emerald-500"/> SSL/TLS 1.3
                              </h4>
                              <p className="text-xs text-slate-400">Todos os dados trafegam via túneis criptografados de 256-bits. Nenhuma informação circula em texto plano.</p>
                           </div>
                           
                           <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                 <FileKey className="w-4 h-4 text-emerald-500"/> Tokenização OAuth2
                              </h4>
                              <p className="text-xs text-slate-400">Utilizamos tokens temporários para autorizar transações. Nunca armazenamos suas credenciais bancárias reais.</p>
                           </div>

                           <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                 <Server className="w-4 h-4 text-emerald-500"/> Data Centers Tier IV
                              </h4>
                              <p className="text-xs text-slate-400">Servidores distribuídos com redundância tripla e proteção contra ataques DDoS avançados.</p>
                           </div>

                           <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                 <ShieldCheck className="w-4 h-4 text-emerald-500"/> Certificação ISO 27001
                              </h4>
                              <p className="text-xs text-slate-400">Processos internos auditados anualmente para garantir a integridade da gestão da informação.</p>
                           </div>
                        </div>

                        <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/20 flex gap-4 items-start">
                           <div className="mt-1"><Landmark className="w-5 h-5 text-emerald-400" /></div>
                           <div>
                              <h4 className="text-white font-bold text-sm">Regulação Banco Central (ITP)</h4>
                              <p className="text-xs text-slate-300 mt-1">
                                 A MIGREI opera como parceira tecnológica de Instituições de Pagamento autorizadas, 
                                 seguindo estritamente as resoluções do arranjo Open Finance Brasil.
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-8 text-center">
                        <button onClick={() => setShowSecurityModal(false)} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors w-full sm:w-auto">
                           Entendido
                        </button>
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

    </div>
  );
};

export default MigreiBank;