import { supabase } from "@/supabase";
import { CartItemWithProduct } from "@/types/cart";
import { Cart } from "@/types/helper.types";


export async function getOrCreateCart(
  userId: string,
  items: CartItemWithProduct[],
): Promise<Cart> {
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
  items.forEach((item) => {
    addItemToCart(item.product_id, newCart.id);
  });
  return newCart;
}


export async function addItemToCart(
  productId: string,
  cart_id: string,
): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("No authenticated user");

  const { data: existingItem } = await supabase
    .from("cart_item")
    .select("*")
    .eq("cart_id", cart_id)
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
      cart_id: cart_id,
      product_id: productId,
      quantity: 1,
    });

    if (error) throw error;
  }
}

// export async function fetchCartItems(): Promise<Cart_Item_With_Product[]> {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   if (!user) throw new Error("No authenticated user");
//   const cart = await getOrCreateCart(user.id, );

//   const { data, error } = await supabase
//     .from("cart_item")
//     .select(
//       `
//     *,
//     product (
//       *
//       )
//       `,
//     )
//     .eq("cart_id", cart.id);

//   console.log("fetchCartItems: ", `cart ${cart.id}, data: ${data}`);
//   if (error) throw error;
//   return data as unknown as Cart_Item_With_Product[];
// }

export async function updateCartItemQuantity(itemId: string, quantity: number) {
  if (quantity <= 0) {
    const { error } = await supabase
      .from("cart_item")
      .delete()
      .eq("id", itemId);

    if (error) throw error;
    return;
  }

  const { error } = await supabase
    .from("cart_item")
    .update({ quantity })
    .eq("id", itemId);

  if (error) throw error;
}

