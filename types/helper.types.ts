import { Database } from "./supabase";

export type Product = Database['public']['Tables']['product']['Row']
export type Cart_Item = Database["public"]["Tables"]["cart_item"]["Row"];
export type Cart_Item_With_Product =
  Database["public"]["Tables"]["cart_item"]["Row"] & { product: Product };
export type Order_Item = Database["public"]["Tables"]["order_item"]["Row"];
export type Order_Item_With_Product =
  Database["public"]["Tables"]["order_item"]["Row"] & { product: Product };
export type Cart = Database["public"]["Tables"]["cart"]["Row"];
export type Cart_Status = Database["public"]["Enums"]["cart_status"];
export type Order = Database["public"]["Tables"]["order"]["Row"];
export type Order_Status = Database["public"]["Enums"]["order_status"];
export type Product_Tag = Database['public']['Enums']['product_tag']
export type Product_Category = Database['public']['Enums']['product_category']

