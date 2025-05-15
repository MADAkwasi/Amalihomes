import { createClient } from '@supabase/supabase-js';
import { environment } from './environments/env';

export const supabase = createClient(environment.FIREBASE_PROJECT_URL, environment.FIREBASE_PUBLIC_KEY);
