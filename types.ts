import type React from 'react';
export interface Lead { name: string; email: string; phone: string; company?: string; cnpj?: string; message?: string; }
export interface LeadInput { name: string; email: string; phone: string; company?: string; message?: string; }
export interface AdminLead { id: number; created_at: string; name: string; email: string; phone: string; company?: string; message?: string; status: 'novo' | 'em_atendimento' | 'convertido' | 'perdido'; }
export interface NewsItem { id: number; title: string; summary: string; category: string; image_url: string; date: string; featured: boolean; }
export interface NewsInput { title: string; summary: string; category: string; image_url: string; featured: boolean; }
export type UserRole = 'admin' | 'client';
export interface UserProfile { id: string; email: string; full_name: string; role: UserRole; region_code?: string; created_at: string; }
export interface ConsumerUnit { id: number; user_id: string; name: string; uc_code: string; distributor: string; voltage?: string; }
export interface Invoice { id: number; unit_id: number; month: string; consumption_kwh: number; total_value: number; savings_estimated: number; status: 'paid' | 'pending' | 'overdue'; pdf_url?: string; consumer_units?: { name: string; }; }
export interface Notification { id: number; title: string; message: string; type: 'info' | 'success' | 'warning' | 'alert'; read: boolean; created_at: string; }
export interface DashboardStats { activeUnits: number; totalConsumption: number; totalSavings: number; lastInvoiceValue: number; }
export interface ChatMessage { id: string; role: 'user' | 'model'; text: string; timestamp: Date; }
export enum AccessLevel { BASIC = 'Básico', CLIENT = 'Cliente MLE', FRANCHISEE = 'Franqueado' }
export interface NavLink { label: string; path: string; icon?: React.ReactNode; }
export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error';
export interface DistributorIntegration { id: string; name: string; logo_url?: string; status: ConnectionStatus; last_sync?: string; }
export interface OCRResult { text: string; extractedValue?: number; extractedDate?: string; confidence: number; }
export interface PaymentMethod { id: string; name: string; description: string; icon: string; }
export interface PIXPayment { qrCode: string; qrCodeUrl: string; expiresIn: number; copyPaste: string; }
export interface PaymentResult { success: boolean; transactionId?: string; method: string; amount: number; timestamp: Date; status: 'pending' | 'processing' | 'completed' | 'failed'; }