import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

const envPath = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: envPath });

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_KEY || process.env.SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
