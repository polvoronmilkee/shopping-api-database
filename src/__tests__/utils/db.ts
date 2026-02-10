import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!

export const testClient = createClient(supabaseUrl, supabaseKey);

export const clearDatabase = async () => {
    const { error } = await testClient
        .from('cart_items')
        .delete()
        .neq('id', 0); // Delete all rows


    if (error) {
        throw new Error(`Failed to clear cart_items table: ${error.message}`);
    }
}