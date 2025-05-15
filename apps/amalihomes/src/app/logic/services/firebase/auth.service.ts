import { Injectable } from '@angular/core';
import { supabase } from '../../../supabase.client';
import { from, Observable } from 'rxjs';
import { AuthResponse } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public signUp(fullName: string, email: string, password: string): Observable<AuthResponse> {
    const promise = supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    return from(promise);
  }

  public signIn(email: string, password: string): Observable<AuthResponse> {
    const promise = supabase.auth.signInWithPassword({
      email,
      password,
    });
    return from(promise);
  }
}
