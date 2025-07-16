import { createClient } from '@supabase/supabase-js';

// const isServer = typeof window === 'undefined';

// const supabaseUrl = isServer
//   ? process.env.SUPABASE_URL
//   : window.env.SUPABASE_URL;

// const supabaseKey = isServer
//   ? process.env.SUPABASE_KEY
//   : window.env.SUPABASE_KEY;

// const supabaseUrl = isServer
//   ? process.env.VITE_SUPABASE_URL
//   : window.env.VITE_SUPABASE_URL;

// const supabaseKey = isServer
//   ? process.env.VITE_SUPABASE_KEY
//   : window.env.VITE_SUPABASE_KEY;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;