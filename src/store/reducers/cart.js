import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  SET_CART
} from "../actions/actionTypes";

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { cartItems: addItemToCart(state.cartItems, action.payload) };
    case REMOVE_ITEM:
      return { cartItems: removeItemFromCart(state.cartItems, action.payload) };
    case CLEAR_ITEM_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
      return { cartItems: [] };
    case SET_CART:
      return action.payload;
    default:
      throw new Error("Should not be here!");
  }
};

export default cartReducer;
