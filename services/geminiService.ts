import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AccessLevel } from "../types";
import { SaaSService } from "./supabase";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION_BASE = `
Você é a Migrei IA, a inteligência artificial especialista em Mercado Livre de Energia da empresa MIGREI.
Seu tom é profissional, seguro, mas acessível e didático.
NUNCA invente dados.
`;

export const sendMessageToGemini = async (
    message: string, 
    history: { role: 'user' | 'model'; text: string }[], 
    accessLevel: AccessLevel = AccessLevel.BASIC, 
    userId?: string,
    allowFinancialData: boolean = false
): Promise<string> => {
  try {
    if (!message || message.trim().length === 0) {
      return "Por favor, digite uma mensagem válida.";
    }

    if (!process.env.API_KEY) {
      return "Serviço de IA temporariamente indisponível. Tente novamente mais tarde.";
    }

    let contextData = "";
    if (userId && allowFinancialData) {
      try {
        const stats = await SaaSService.getDashboardStats(userId);
        contextData = `[DADOS SIGILOSOS] Consumo: ${stats.totalConsumption} kWh, Economia: R$ ${stats.totalSavings.toFixed(2)}`;
      } catch (_e) {
        void _e;
        contextData = "[MODO PRIVADO]";
      }
    } else {
      contextData = "[MODO PRIVADO]";
    }

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION_BASE}\n[ACESSO: ${accessLevel}]\n${contextData}`,
        temperature: 0.7
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: message });

    if (!response.text) {
      return "Desculpe, não consegui processar sua pergunta. Por favor, tente novamente.";
    }

    return response.text;
  } catch (error) {
    
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return "Erro de configuração no serviço de IA. Contate o suporte.";
      }
      if (error.message.includes("rate limit")) {
        return "Muitas requisições. Por favor, aguarde um momento e tente novamente.";
      }
    }

    return "Desculpe, ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.";
  }
};