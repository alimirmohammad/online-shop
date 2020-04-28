import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  SET_CART
} from "./actionTypes";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};

export const clearItemFromCart = (payload) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const setCart = (payload) => {
  return {
    type: SET_CART,
    payload,
  };
};
