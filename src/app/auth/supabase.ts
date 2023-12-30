import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabaseClient = createClient(supabaseURL, supabase_anon_key);