import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/env';
import { SupabaseMessageRow } from '../../../types/supabase';
import { catchError, from, map } from 'rxjs';
import { DashboardMessage, DashboardMessageTab } from '../../../presentation/pages/dashboard/dashboard-messages/data';

export const supabase = createClient(environment.SUPABASE_PROJECT_URL, environment.SUPABASE_PUBLIC_KEY);

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  public getSupabaseClient() {
    return supabase;
  }
  public async sendEnquiry(messageData: SupabaseMessageRow) {
    try {
      const { error } = await supabase.from('messages').insert([messageData]).select();
      return !error;
    } catch {
      return false;
    }
  }

  public getSalesPersonnelDashboardMessages(personnelEmail: string) {
    const response = supabase.from('messages').select('*').eq('personnel_email', personnelEmail);
    return from(response as unknown as Promise<{ data: DashboardMessage[]; error: Error }>).pipe(
      map(({ data, error }) => {
        if (error || !data) {
          return [];
        }
        return data;
      }),
      catchError(() => {
        return [];
      }),
    );
  }

  public updateSalesPersonnelDashboardMessageStatus(messageId: string | number, status: DashboardMessageTab) {
    const response = supabase.from('messages').update({ status }).eq('id', messageId);
    return from(response as unknown as Promise<{ data: null; error: Error }>).pipe(
      map(({ error }) => {
        return !error;
      }),
      catchError(() => []),
    );
  }

  public deleteSalesPersonnelDashboardMessageStatus(messageId: string | number) {
    const response = supabase.from('messages').delete().eq('id', messageId).eq('status', DashboardMessageTab.Trash);
    return from(response as unknown as Promise<{ error: Error }>).pipe(
      map(({ error }) => {
        return !error;
      }),
      catchError(() => []),
    );
  }
}
