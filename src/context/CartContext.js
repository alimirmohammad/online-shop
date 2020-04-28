import { createContext } from "react";

export const initialCart = {
  cartItems: []
};

const CartContext = createContext(initialCart);

export default CartContext;
