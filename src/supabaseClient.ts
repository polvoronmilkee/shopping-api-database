import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
	dotenv.config({ path: ".env.test" });
}

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
