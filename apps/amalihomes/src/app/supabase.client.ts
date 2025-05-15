import { createClient } from '@supabase/supabase-js';
import { environment } from './environments/env';

export const supabase = createClient(environment.SUPABASE_PROJECT_URL, environment.SUPABASE_PUBLIC_KEY);
