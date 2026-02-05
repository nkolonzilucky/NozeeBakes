import { Cart_Item_With_Product } from "./helper.types";

export type CartItemWithProduct = Omit<Cart_Item_With_Product, 'created_at' | 'updated_at' | 'cart_id' >

