import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Banknote, CheckCircle2, FileText, X, Loader2, Wallet, ChevronDown, ArrowRight, History, QrCode } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { SaaSService } from '../../services/supabase';
import PaymentService, { PaymentMethod, PIXPayment } from '../../services/paymentService';
import { Invoice } from '../../types';

const Finance: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'payable' | 'history'>('payable');
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [paidInvoices, setPaidInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [paymentStep, setPaymentStep] = useState<'select-method' | 'review' | 'processing' | 'success'>('select-method');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [pixCode, setPixCode] = useState<PIXPayment | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
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

  const handleStartPayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setPaymentStep('select-method');
    setSelectedMethod(null);
    setPixCode(null);
    setTransactionId(null);
  };

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
    if (method.id === 'pix' && selectedInvoice) {
      const pix = PaymentService.generatePIXCode(selectedInvoice.id, selectedInvoice.total_value);
      setPixCode(pix);
    }
    setPaymentStep('review');
  };

  const handleConfirmPayment = async () => {
    if (!selectedInvoice || !selectedMethod) return;
    setPaymentStep('processing');

    try {
      let result: any;
      if (selectedMethod.id === 'pix') {
        result = await new Promise(resolve => setTimeout(() => resolve({
          transactionId: `PIX-${Date.now()}`,
          success: true
        }), 2000));
      } else if (selectedMethod.id === 'credit-card') {
        result = await PaymentService.processCardPayment(
          selectedInvoice.id,
          selectedInvoice.total_value,
          'token',
          1
        );
      } else {
        result = await PaymentService.processDebitPayment(
          selectedInvoice.id,
          selectedInvoice.total_value,
          'token'
        );
      }

      setTransactionId(result.transactionId);
      setPaymentStep('success');
      setInvoices(prev => prev.filter(i => i.id !== selectedInvoice.id));
      setPaidInvoices(prev => [{ ...selectedInvoice, status: 'paid' }, ...prev]);
    } catch {
      alert('Erro ao processar pagamento. Tente novamente.');
      setPaymentStep('review');
    }
  };

  const formatMoney = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const faqs = [
    {
      question: "Como funciona o pagamento via PIX?",
      answer: "Gere o código QR ou copy-paste e escaneie no seu banco. O pagamento é processado em segundos, 24/7."
    },
    {
      question: "Posso pagar com cartão?",
      answer: "Sim! Você pode usar cartão de crédito em até 3 parcelas ou débito em conta para pagamento imediato."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Todos os pagamentos são processados com criptografia de banco. Nunca compartilhamos dados pessoais ou financeiros."
    }
  ];