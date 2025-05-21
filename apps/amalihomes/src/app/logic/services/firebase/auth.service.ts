import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AuthResponse, AuthError } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase.service';

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

  public logout(): Observable<{ error: AuthError | null }> {
    const promise = supabase.auth.signOut();
    return from(promise);
  }
}
