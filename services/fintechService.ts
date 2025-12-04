import { BankOption, PaymentTransaction } from '../types';
import { SaaSService } from './supabase';

export const FintechService = {
  getAvailableBanks(): BankOption[] {
    return [
      { id: 'nubank', name: 'Nubank', color: '#820ad1' },
      { id: 'itau', name: 'Itaú', color: '#ec7000' },
      { id: 'bradesco', name: 'Bradesco', color: '#cc092f' },
      { id: 'santander', name: 'Santander', color: '#ec0000' },
      { id: 'bancodobrasil', name: 'Banco do Brasil', color: '#fbf600' },
      { id: 'inter', name: 'Inter', color: '#ff7a00' }
    ];
  },
  async initiateOpenFinancePayment(
    invoiceId: number,
    amount: number,
    bankId: string
  ): Promise<PaymentTransaction> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await SaaSService.updateInvoiceStatus(invoiceId, 'paid');

    return {
      id: `TX-${Math.floor(Math.random() * 1000000)}`,
      invoiceId,
      amount,
      status: 'completed',
      bankName: bankId.charAt(0).toUpperCase() + bankId.slice(1),
      date: new Date().toISOString()
    };
  }
};