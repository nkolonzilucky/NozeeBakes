import { supabase } from "@/supabase";
import { getOrCreateCart } from "./cart";
import { Order } from "@/types/helper.types";
import { CartItemWithProduct } from "@/types/cart";

export async function checkoutCart(items: CartItemWithProduct[]) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("No authenticated user");

  // 2. get cart items

  if (!items || items.length === 0) {
    throw new Error("Cart is empty");
  }
  // 1. get active cart
  const cart = await getOrCreateCart(user.id, items);

  // 3. calculate total
  const total_amount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // 4. create order
  const { data: order, error: orderError } = await supabase
    .from("order")
    .insert({
      cart_id: cart.id,
      total_amount,
      status: "pending",
      user_id: user.id,
    })
    .select()
    .single();

  if (orderError) throw orderError;

  // 5. create order items
  const orderItems = items.map((item) => ({
    order_id: order.id,
    product_id: item.product.id,
    quantity: item.quantity,
    price: item.product.price,
  }));

  const { error: itemsError } = await supabase
    .from("order_item")
    .insert(orderItems);

  if (itemsError) throw itemsError;

  // 6. clear cart
  await supabase.from("cart_item").delete().eq("cart_id", cart.id);

  return order;
}


export async function fetchOrderDetails(orderId: string) {
  const { data, error } = await supabase
    .from("order")
    .select(
      `
      id,
      status,
      total_amount,
      created_at,
      order_item (
        id,
        quantity,
        price,
        product:product_id (
          id,
          name,
          image_url
        )
      )
    `,
    )
    .eq("id", orderId)
    .single();

  if (error) throw error;
  return data;
}


export async function fetchOrders(): Promise<Order[]> {
  const { data: { user } } = await supabase.auth.getUser()
  if(!user) throw new Error("No authenticated user")
  const { data, error } = await supabase
        .from("order")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        if (error) throw error;
        return data ?? []
}
