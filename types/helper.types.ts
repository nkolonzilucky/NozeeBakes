import { Database } from "./supabase";

export type Product = Database['public']['Tables']['product']['Row']
export type Product_Tag = Database['public']['Enums']['product_tag']
export type Product_Category = Database['public']['Enums']['product_category']