import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Shield, Lock, Landmark, CheckCircle2, FileText, X, Loader2, Wallet, ChevronDown, ArrowRight, Share2, History, Banknote } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { SaaSService } from '../../services/supabase';
import { FintechService } from '../../services/fintechService';
import { Invoice, BankOption, PaymentTransaction } from '../../types';
import { useLocation } from 'react-router-dom';
const Finance: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'payable' | 'history'>('payable');
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [paidInvoices, setPaidInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [paymentStep, setPaymentStep] = useState<'select-bank' | 'review' | 'processing' | 'success'>('select-bank');
  const [selectedBank, setSelectedBank] = useState<BankOption | null>(null);
  const [transaction, setTransaction] = useState<PaymentTransaction | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const loadInvoices = useCallback(async () => { 
    if (!user) return; 
    setLoading(true);
    const data = await SaaSService.getAllInvoices(user.id); 
    setInvoices(data.filter(i => i.status === 'pending')); 
    setPaidInvoices(data.filter(i => i.status === 'paid'));
    setLoading(false); 
  }, [user]);

  useEffect(() => {
    if (user) loadInvoices();
  }, [user, loadInvoices]);
  useEffect(() => {
    if (location.state?.invoiceId && invoices.length > 0) {
      const targetInvoice = invoices.find(i => i.id === location.state.invoiceId);
      if (targetInvoice) {
        handleStartPayment(targetInvoice);
        window.history.replaceState({}, document.title);
      }
    }
  }, [invoices, location.state]);
  
  const handleStartPayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setPaymentStep('select-bank');
    setSelectedBank(null);
    setTransaction(null);
  };

  const handleSelectBank = (bank: BankOption) => {
    setSelectedBank(bank);
    setPaymentStep('review');
  };

  const handleConfirmPayment = async () => {
    if (!selectedInvoice || !selectedBank) return;
    setPaymentStep('processing');

    const result = await FintechService.initiateOpenFinancePayment(
      selectedInvoice.id,
      selectedInvoice.total_value,
      selectedBank.id
    );

    setTransaction(result);
    setPaymentStep('success');
    setInvoices(prev => prev.filter(i => i.id !== selectedInvoice.id));
    setPaidInvoices(prev => [{ ...selectedInvoice, status: 'paid' }, ...prev]);
  };
  const formatMoney = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const faqs = [ { question: "Como funciona a Iniciação de Pagamentos (Open Finance)?", answer: "O Open Finance é um sistema regulado pelo Banco Central que permite realizar pagamentos diretamente do app do seu banco, sem precisar copiar códigos de barras ou digitar dados do cartão." }, { question: "A MIGREI tem acesso à minha senha bancária?", answer: "NUNCA. Nós apenas redirecionamos você para o ambiente seguro do seu banco. Toda a autenticação é feita lá." } ];
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"> 
        <div> <h1 className="text-2xl font-bold text-white flex items-center gap-2"> <CreditCard className="w-6 h-6 text-emerald-500" /> Financeiro & Pagamentos </h1> <p className="text-slate-400">Gestão integrada de faturas e pagamentos inteligentes.</p> </div> 
        <div className="bg-slate-900 border border-emerald-500/30 rounded-full px-4 py-1.5 flex items-center gap-2"> <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">MIGREI Bank Ativo</span> </div> 
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-emerald-500/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"> <div className="bg-emerald-500/20 p-4 rounded-full border border-emerald-500/30 shrink-0"> <Shield className="w-8 h-8 text-emerald-400" /> </div> <div className="flex-1 z-10"> <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2"> Pagamentos Seguros via Open Finance <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-slate-700">Regulado pelo Banco Central</span> </h3> <p className="text-slate-300 text-sm leading-relaxed"> Realize pagamentos diretamente do seu banco sem boletos e sem digitar dados. Tecnologia de ponta com criptografia bancária e split automático de receitas. </p> </div> <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 z-10"> <Landmark className="w-8 h-8 text-white" /> <Lock className="w-8 h-8 text-white" /> </div> </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6"> 
            <div className="flex border-b border-slate-800 mb-6">
              <button onClick={() => setActiveTab('payable')} className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'payable' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-400 hover:text-white'}`}> <Banknote className="w-4 h-4" /> Contas a Pagar {invoices.length > 0 && <span className="bg-orange-500 text-white text-[10px] px-1.5 rounded-full">{invoices.length}</span>} </button>
              <button onClick={() => setActiveTab('history')} className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'history' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-400 hover:text-white'}`}> <History className="w-4 h-4" /> Histórico de Transações </button>
            </div>
            {loading ? ( <div className="text-center py-12 bg-slate-900 rounded-xl border border-slate-800"> <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mx-auto" /> </div> ) : activeTab === 'payable' ? ( invoices.length === 0 ? ( <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center"> <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" /> <h3 className="text-xl font-bold text-white mb-2">Tudo em dia!</h3> <p className="text-slate-400">Você não possui faturas pendentes no momento.</p> </div> ) : ( <div className="space-y-4"> {invoices.map(inv => ( <motion.div key={inv.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-emerald-500/30 transition-all"> <div className="flex items-center gap-4 w-full sm:w-auto"> <div className="bg-slate-800 p-3 rounded-lg text-orange-500"> <FileText className="w-6 h-6" /> </div> <div> <h4 className="font-bold text-white text-lg">Fatura de Energia</h4> <p className="text-slate-400 text-sm">Ref: {new Date(inv.month).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</p> </div> </div> <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end"> <div className="text-right"> <p className="text-xs text-slate-500 font-bold uppercase">Valor Total</p> <p className="text-xl font-bold text-white">{formatMoney(inv.total_value)}</p> </div> <button onClick={() => handleStartPayment(inv)} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105"> Pagar Agora </button> </div> </motion.div> ))} </div> ) ) : ( paidInvoices.length === 0 ? ( <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center"> <History className="w-12 h-12 text-slate-500 mx-auto mb-4" /> <h3 className="text-xl font-bold text-white mb-2">Sem histórico</h3> <p className="text-slate-400">Nenhum pagamento realizado ainda.</p> </div> ) : ( <div className="space-y-4"> {paidInvoices.map(inv => ( <div key={inv.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between opacity-75 hover:opacity-100 transition-opacity"> <div className="flex items-center gap-4"> <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500"><CheckCircle2 className="w-5 h-5"/></div> <div> <h4 className="font-bold text-white">Pagamento Realizado</h4> <p className="text-xs text-slate-400">Ref: {new Date(inv.month).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}</p> </div> </div> <div className="text-right"> <p className="font-bold text-emerald-400">{formatMoney(inv.total_value)}</p> <p className="text-[10px] text-slate-500 uppercase">Via Open Finance</p> </div> </div> ))} </div> ) )}
          </div>
          <div className="space-y-6"> 
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6"> <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"> <Lock className="w-5 h-5 text-slate-400" /> Central de Segurança </h3> <div className="space-y-4"> {faqs.map((faq, idx) => ( <div key={idx} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0"> <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} className="w-full flex justify-between items-center text-left text-sm font-medium text-slate-300 hover:text-white transition-colors"> {faq.question} <ChevronDown className={`w-4 h-4 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} /> </button> <AnimatePresence> {expandedFaq === idx && ( <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"> <p className="text-xs text-slate-500 mt-2 leading-relaxed pl-2 border-l-2 border-emerald-500/30"> {faq.answer} </p> </motion.div> )} </AnimatePresence> </div> ))} </div> </div> 
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 border border-orange-500/20 rounded-xl p-6"> <div className="flex items-center gap-3 mb-4"> <Wallet className="w-6 h-6 text-orange-500" /> <h3 className="font-bold text-white">Smart Split</h3> </div> <p className="text-xs text-slate-400 mb-4"> Tecnologia exclusiva que garante o repasse automático de royalties para seu franqueado local no momento do pagamento. </p> </div> 
          </div>
      </div>
      <AnimatePresence> {selectedInvoice && ( <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"> <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative"> {paymentStep !== 'processing' && paymentStep !== 'success' && ( <button onClick={() => setSelectedInvoice(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"> <X className="w-5 h-5" /> </button> )} <div className="bg-slate-800/50 p-6 border-b border-slate-800"> <h2 className="text-xl font-bold text-white mb-1"> {paymentStep === 'select-bank' && 'Escolha seu Banco'} {paymentStep === 'review' && 'Revisão do Pagamento'} {paymentStep === 'processing' && 'Conectando ao Banco...'} {paymentStep === 'success' && 'Pagamento Iniciado!'} </h2> </div> <div className="p-6"> {paymentStep === 'select-bank' && ( <div className="grid grid-cols-2 gap-4"> {FintechService.getAvailableBanks().map(bank => ( <button key={bank.id} onClick={() => handleSelectBank(bank)} className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-emerald-500 hover:bg-slate-800 transition-all flex flex-col items-center gap-2 group"> <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: bank.color }}> {bank.name[0]} </div> <span className="text-sm font-medium text-slate-300 group-hover:text-white">{bank.name}</span> </button> ))} </div> )} {paymentStep === 'review' && selectedBank && ( <div className="space-y-6"> <div className="bg-slate-950 p-4 rounded-xl border border-slate-800"> <div className="flex justify-between mb-2"> <span className="text-slate-400 text-sm">Banco Selecionado</span> <span className="text-white font-bold flex items-center gap-2"> <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedBank.color }}></div> {selectedBank.name} </span> </div> <div className="flex justify-between border-t border-slate-800 pt-2 mt-2"> <span className="text-slate-400 text-sm">Valor Total</span> <span className="text-xl font-bold text-emerald-400">{formatMoney(selectedInvoice.total_value)}</span> </div> </div> <div className="bg-orange-900/10 border border-orange-500/20 p-4 rounded-xl"> <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-3 flex items-center gap-2"> <Share2 className="w-3 h-3" /> Smart Split (Divisão Automática) </h4> <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex mb-3"> <div className="h-full bg-slate-600 w-[92%]"></div> <div className="h-full bg-orange-500 w-[8%]"></div> </div> <div className="space-y-2 text-sm"> <div className="flex justify-between text-slate-300 items-center"> <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-600"></div> <span>MIGREI Matriz (Serviços)</span></div> <span>{formatMoney(selectedInvoice.total_value * 0.92)}</span> </div> <div className="flex justify-between text-slate-300 items-center"> <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div> <span>Franqueado Local (Royalties)</span></div> <span>{formatMoney(selectedInvoice.total_value * 0.08)}</span> </div> </div> </div> <button onClick={handleConfirmPayment} className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"> Confirmar e Ir para o App <ArrowRight className="w-5 h-5" /> </button> </div> )} {paymentStep === 'processing' && ( <div className="text-center py-12"> <div className="relative w-20 h-20 mx-auto mb-6"> <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div> <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div> <Lock className="absolute inset-0 m-auto w-8 h-8 text-emerald-500" /> </div> <h3 className="text-xl font-bold text-white mb-2">Conectando ao {selectedBank?.name}...</h3> <p className="text-slate-400 text-sm"> Aguarde enquanto iniciamos o ambiente seguro do Open Finance. </p> </div> )} {paymentStep === 'success' && transaction && ( <div className="text-center py-8"> <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-500 text-emerald-500"> <CheckCircle2 className="w-10 h-10" /> </div> <h3 className="text-2xl font-bold text-white mb-2">Pagamento Iniciado!</h3> <p className="text-slate-400 text-sm mb-8"> A transação <strong>{transaction.id}</strong> foi enviada para o seu banco. </p> <button onClick={() => setSelectedInvoice(null)} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"> Fechar e Acompanhar </button> </div> )} </div> </motion.div> </div> )} </AnimatePresence>
    </div>
  );
};
export default Finance;