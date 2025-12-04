import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../constants';
import { AdminLead, NewsItem, NewsInput, LeadInput, ConsumerUnit, Invoice, Notification, DashboardStats, DistributorIntegration, UserProfile } from '../types';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const SaaSService = {
  async getMyUnits(userId: string): Promise<ConsumerUnit[]> {
    const { data, error } = await supabase.from('consumer_units').select('*').eq('user_id', userId);
    if (error) return [];
    return data as ConsumerUnit[] || [];
  },
  async getUnitInvoices(unitId: number): Promise<Invoice[]> {
    const { data, error } = await supabase.from('invoices').select('*').eq('unit_id', unitId).order('month', { ascending: false });
    if (error) return [];
    return data as Invoice[] || [];
  },
  async getAllInvoices(userId: string): Promise<Invoice[]> {
    const { data, error } = await supabase.from('invoices').select('*, consumer_units!inner(name, user_id)').eq('consumer_units.user_id', userId).order('month', { ascending: false });
    if (error) return [];
    return data as unknown as Invoice[] || [];
  },
  async updateInvoiceStatus(invoiceId: number, status: 'paid' | 'pending' | 'overdue'): Promise<boolean> {
    const { error } = await supabase.from('invoices').update({ status }).eq('id', invoiceId);
    return !error;
  },
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const units = await this.getMyUnits(userId);
    const invoices = await this.getAllInvoices(userId);
    const totalConsumption = invoices.reduce((acc, inv) => acc + inv.consumption_kwh, 0);
    const totalSavings = invoices.reduce((acc, inv) => acc + (inv.savings_estimated || 0), 0);
    const latestInvoice = invoices.length > 0 ? invoices[0].total_value : 0;
    return { activeUnits: units.length, totalConsumption, totalSavings, lastInvoiceValue: latestInvoice };
  },
  async seedTestDatabase(userId: string) {
    const units = await this.getMyUnits(userId);
    if (units.length > 0) return { success: true, message: "Dados já existem." };
    
    try {
      const { data: unit, error: unitError } = await supabase
        .from('consumer_units')
        .insert([{
          user_id: userId,
          name: 'Matriz Industrial',
          uc_code: 'UC-' + Math.floor(Math.random() * 1000000),
          distributor: 'Enel SP',
          voltage: 'A4'
        }])
        .select()
        .single();

      if (unitError) throw unitError;

      const invoices = [];
      for (let i = 0; i < 6; i++) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        date.setDate(1);
        
        const consumption = 10000 + Math.random() * 5000;
        const totalValue = consumption * 0.65;
        const savings = (consumption * 0.85) - totalValue;

        invoices.push({
          unit_id: unit.id,
          month: date.toISOString().split('T')[0],
          consumption_kwh: Math.round(consumption),
          total_value: Math.round(totalValue * 100) / 100,
          savings_estimated: Math.round(savings * 100) / 100,
          status: i === 0 ? 'pending' : 'paid'
        });
      }

      const { error: invError } = await supabase.from('invoices').insert(invoices);
      if (invError) throw invError;

      try {
        await supabase.from('notifications').insert([{
          user_id: userId,
          title: 'Fatura Disponível',
          message: 'A fatura referente ao mês atual já está disponível.',
          type: 'info',
          read: false
        }]);
      } catch (_e) {
        void _e;
        // Notifications table missing
      }

      return { success: true, message: "Ambiente populado com sucesso!" };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      return { success: false, message: "Erro ao gerar dados: " + message };
    }
  },
  async clearTestDatabase(userId: string) {
    try {
      const units = await this.getMyUnits(userId);
      const unitIds = units.map(u => u.id);
      if (unitIds.length > 0) {
        await supabase.from('invoices').delete().in('unit_id', unitIds);
        await supabase.from('consumer_units').delete().in('id', unitIds);
      }
      await supabase.from('notifications').delete().eq('user_id', userId);
      return { success: true, message: "Dados removidos com sucesso." };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      return { success: false, message: "Erro ao limpar dados: " + message };
    }
  },
  async getTelemetryData(unitId: number) {
    const { data: invoices } = await supabase
      .from('invoices')
      .select('*')
      .eq('unit_id', unitId)
      .order('month', { ascending: false })
      .limit(1);

    const invoice = invoices && invoices.length > 0 ? invoices[0] : null;
    if (!invoice) return [];

    const totalConsumption = invoice.consumption_kwh;
    const daysInMonth = 30;
    const avgDaily = totalConsumption / daysInMonth;
    const dailyData = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isWeekend = (i % 7 === 0) || (i % 7 === 6);
      const dayMultiplier = isWeekend ? 0.6 : 1.1;
      const dailyTotal = avgDaily * dayMultiplier * (0.9 + Math.random() * 0.2);
      const peakRatio = 0.18;

      dailyData.push({
        day: i,
        date: `Dia ${i}`,
        ponta: Math.round(dailyTotal * peakRatio),
        foraPonta: Math.round(dailyTotal * (1 - peakRatio)),
        demandMax: Math.round((dailyTotal / 24) * 2)
      });
    }

    return dailyData;
  },
  async getIntegrations(_userId: string): Promise<DistributorIntegration[]> {
    void _userId;
    return [
      { id: 'enel', name: 'Enel', status: 'disconnected' },
      { id: 'cemig', name: 'Cemig', status: 'disconnected' },
      { id: 'cpfl', name: 'CPFL', status: 'disconnected' },
      { id: 'light', name: 'Light', status: 'disconnected' }
    ];
  },
  async connectIntegration(_userId: string, distributorId: string, _credentials: unknown): Promise<boolean> {
    void _userId;
    void _credentials;
    await new Promise(resolve => setTimeout(resolve, 2000));
    return true;
  },
  async uploadInvoice(_userId: string, _file: File): Promise<{ success: boolean; message: string }> {
    void _userId;
    void _file;
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { success: true, message: "Fatura processada com sucesso!" };
  }
};

export const NotificationService = {
  async getAll(userId: string): Promise<Notification[]> {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (error) {
        return [];
      }
      
      return data as Notification[] || [];
    } catch (_err) {
      void _err;
      return [];
    }
  },
  async markAsRead(id: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', id);
      return !error;
    } catch (_err) {
      void _err;
      return false;
    }
  },
  async markAllAsRead(userId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('user_id', userId);
      return !error;
    } catch (_err) {
      void _err;
      return false;
    }
  }
};

export const UserService = {
  async getAll(): Promise<UserProfile[]> {
    const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
    if (error) return [];
    return data as UserProfile[] || [];
  }
};

export const NewsService = {
  async getAll(): Promise<NewsItem[]> {
    const { data, error } = await supabase.from('news').select('*').order('date', { ascending: false });
    if (error) return [];
    return data || [];
  },
  async create(news: NewsInput): Promise<{ success: boolean; error?: string }> {
    const { error } = await supabase.from('news').insert([news]);
    if (error) return { success: false, error: error.message };
    return { success: true };
  },
  async delete(id: number): Promise<{ success: boolean; error?: string }> {
    const { error } = await supabase.from('news').delete().eq('id', id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  }
};

export const LeadService = {
  async create(lead: LeadInput): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await supabase.from('leads').insert([{ name: lead.name, email: lead.email, phone: lead.phone, company: lead.company, message: lead.message, status: 'novo' }]);
        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (e: unknown) { const message = e instanceof Error ? e.message : String(e); return { success: false, error: message }; }
  },
  async getAll(): Promise<AdminLead[]> {
    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (error) return [];
    return data as AdminLead[] || [];
  },
  async updateStatus(id: number, status: string): Promise<boolean> {
    const { error } = await supabase.from('leads').update({ status }).eq('id', id);
    return !error;
  }
};