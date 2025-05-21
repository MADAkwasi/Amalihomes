import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/env';
import { SupabaseMessageRow } from '../../../types/supabase';

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
}
