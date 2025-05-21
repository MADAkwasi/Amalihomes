import { DashboardMessageTab } from '../presentation/pages/dashboard/dashboard-messages/data';

export interface SupabaseMessageRow {
  personnel_email: string;
  message: string;
  customer_email: string;
  customer_name: string;
  status: DashboardMessageTab;
  priority: 'low' | 'high' | 'moderate';
}
