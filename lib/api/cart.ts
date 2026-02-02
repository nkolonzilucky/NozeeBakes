import { supabase } from "@/supabase";
import { Cart } from "@/types/helper.types";


export async function getOrCreateCart(userId: string): Promise<Cart> {
  const { data: existingCart } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (existingCart) return existingCart;

  const { data: newCart, error } = await supabase
    .from("cart")
    .insert({ user_id: userId })
    .select()
    .single();

  if (error) throw error;
  return newCart;
}


export async function addItemToCart(userId: string, productId: string): Promise<void> {
  const cart = await getOrCreateCart(userId);

  const { data: existingItem } = await supabase
    .from("cart_item")
    .select("*")
    .eq("cart_id", cart.id)
    .eq("product_id", productId)
    .single();

  if (existingItem) {
    const { error } = await supabase
      .from("cart_item")
      .update({ quantity: existingItem.quantity + 1 })
      .eq("id", existingItem.id);

    if (error) throw error;
  } else {
    const { error } = await supabase.from("cart_item").insert({
      cart_id: cart.id,
      product_id: productId,
      quantity: 1,
    });

    if (error) throw error;
  }
}
