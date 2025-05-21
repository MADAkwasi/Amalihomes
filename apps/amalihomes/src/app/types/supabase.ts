import { DashboardMessageTab } from '../presentation/pages/dashboard/dashboard-messages/data';

export interface SupabaseMessageRow {
  date: number;
  personnel_email: string;
  message: string;
  subject: string;
  customer_email: string;
  customer_name: string;
  status: DashboardMessageTab;
  priority: 'low' | 'high' | 'moderate';
}
