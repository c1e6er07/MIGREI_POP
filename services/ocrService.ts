import Tesseract from 'tesseract.js';
import { OCRResult } from '../types';

export const OCRService = {
  async processInvoice(file: File): Promise<OCRResult> {
    try {
      if (!file) {
        throw new Error("Nenhum arquivo foi fornecido.");
      }

      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        throw new Error("Formato de arquivo inválido. Use JPEG, PNG ou PDF.");
      }

      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error("Arquivo muito grande. Máximo: 10MB.");
      }

      const worker = await Tesseract.createWorker('por');
      const ret = await worker.recognize(file);
      const text = ret.data.text;
      await worker.terminate();

      if (!text || text.trim().length === 0) {
        throw new Error("Não foi possível extrair texto do documento.");
      }

      const moneyRegex = /R\$\s?(\d{1,3}(?:\.\d{3})*,\d{2})/g;
      const matches = [...text.matchAll(moneyRegex)];
      let maxValue = 0;
      matches.forEach(match => {
        const val = parseFloat(match[1].replace('.', '').replace(',', '.'));
        if (val > maxValue) maxValue = val;
      });

      const dateRegex = /(\d{2})\/(\d{4})|(\d{2})\/(\d{2})\/(\d{4})/g;
      const dateMatches = [...text.matchAll(dateRegex)];
      let foundDate = '';
      if (dateMatches.length > 0) {
        const m = dateMatches[0];
        if (m[1] && m[2]) foundDate = `${m[1]}/${m[2]}`;
        else if (m[3] && m[4] && m[5]) foundDate = `${m[4]}/${m[5]}`;
      }

      return {
        text: text.substring(0, 500) + (text.length > 500 ? '...' : ''),
        extractedValue: maxValue > 0 ? maxValue : undefined,
        extractedDate: foundDate || undefined,
        confidence: ret.data.confidence
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Falha ao processar documento: ${error.message}`);
      }
      throw new Error("Falha ao processar imagem.");
    }
  }
};