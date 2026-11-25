import { createClient } from '@supabase/supabase-js';

// Environment variables with fallback
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if valid Supabase configuration is present
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('placeholder')
);

// Supabase client instance (or null if not configured)
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local storage helper keys for robust offline / mock database mode
export const STORAGE_KEYS = {
  PROPERTIES: 'morya_properties_data',
  ENQUIRIES: 'morya_enquiries_data',
  SERVICES: 'morya_services_data',
  ADMIN_SESSION: 'morya_admin_session',
  SETTINGS: 'morya_site_settings',
};

// Developer advisory log
if (!isSupabaseConfigured) {
  console.info(
    '%c[Morya Properties]%c Running in autonomous Local-First / LocalStorage mode.\nAll enquiries, property updates, and admin actions are persistently stored in your browser.\nTo connect live PostgreSQL via Supabase, set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.',
    'color: #C69B52; font-weight: bold;',
    'color: inherit;'
  );
}
