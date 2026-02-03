import { supabase } from "@/supabase";
import { Product } from "@/types/helper.types";

export async function fetchProducts(): Promise<Product[]>{
    const { data, error } = await supabase.from('product').select('*').order('created_at', { ascending: false })
    
    if (error) throw error
    return data ?? []
}