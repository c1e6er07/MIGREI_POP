/**
 * Payment Service - Simplified Payment Processing
 * Handles PIX and Card payments for invoices
 */

export interface PaymentMethod {
  id: 'pix' | 'credit-card' | 'debit-card';
  name: string;
  description: string;
  icon: string;
}

export interface PIXPayment {
  qrCode: string;
  qrCodeUrl: string;
  expiresIn: number;
  copyPaste: string;
}

export interface CardPayment {
  lastDigits: string;
  brand: string;
  installments: number;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  method: 'pix' | 'credit-card' | 'debit-card';
  amount: number;
  timestamp: string;
  status: 'processing' | 'completed' | 'failed';
}

class PaymentService {
  /**
   * Get available payment methods
   */
  static getAvailableMethods(): PaymentMethod[] {
    return [
      {
        id: 'pix',
        name: 'PIX',
        description: 'Transferência instantânea 24/7',
        icon: '💳'
      },
      {
        id: 'credit-card',
        name: 'Cartão de Crédito',
        description: 'Pague em até 3 parcelas',
        icon: '💳'
      },
      {
        id: 'debit-card',
        name: 'Cartão de Débito',
        description: 'Débito em conta imediatamente',
        icon: '🏧'
      }
    ];
  }

  /**
   * Generate PIX payment code
   * In production, integrate with actual PIX gateway
   */
  static generatePIXCode(invoiceId: number, amount: number): PIXPayment {
    // Mock PIX QR Code generation
    // In production: Call actual PIX API (Stripe, PagSeguro, MercadoPago, etc)
    const timestamp = Date.now();
    const mockQRCode = `00020126580014br.gov.bcb.brcode01051.0.0${timestamp}`;
    
    return {
      qrCode: mockQRCode,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${mockQRCode}`,
      expiresIn: 3600, // 1 hour
      copyPaste: `00020126580014br.gov.bcb.brcode01051.0.0${timestamp}`
    };
  }

  /**
   * Process credit card payment
   * In production, integrate with payment gateway
   */
  static async processCardPayment(
    invoiceId: number,
    amount: number,
    cardToken: string,
    installments: number = 1
  ): Promise<PaymentResult> {
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      success: true,
      transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      method: 'credit-card',
      amount,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
  }

  /**
   * Process debit card payment
   * In production, integrate with payment gateway
   */
  static async processDebitPayment(
    invoiceId: number,
    amount: number,
    cardToken: string
  ): Promise<PaymentResult> {
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      success: true,
      transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      method: 'debit-card',
      amount,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
  }

  /**
   * Verify PIX payment status
   * In production, call actual PIX verification API
   */
  static async verifyPIXPayment(qrCode: string): Promise<boolean> {
    // Simulate PIX verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true; // In production: check with PSP
  }

  /**
   * Get payment methods for invoice
   */
  static getPaymentMethodsForInvoice(amount: number) {
    const methods = this.getAvailableMethods();
    
    return methods.map(method => ({
      ...method,
      installmentOptions: method.id === 'credit-card' 
        ? [1, 2, 3] 
        : [1]
    }));
  }
}

export default PaymentService;
