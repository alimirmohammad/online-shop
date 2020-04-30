import React, { useContext, useEffect } from "react";
import "./CheckoutItem.scss";
import CartContext from "../../context/CartContext";
import { commafy } from "../../utils/commafy";
import { useCookies } from "react-cookie";

import { addItem, removeItem, clearItemFromCart } from "../../store/actions";

const CheckoutItem = ({ cartItem }) => {
  const { image, name, price, quantity } = cartItem;
  const [cookies, setCookie, removeCookie] = useCookies(["token", "cart"]);

  const { cartState, dispatchCart } = useContext(CartContext);
  const { cartItems } = cartState;

  const postItemToBackend = async (item, quantity) => {
    if (!cookies.token) return;
    try {
      const res = await fetch(
        "http://5.9.249.45:8000/finance/MyShoppingCart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `jwt ${cookies.token}`,
          },
          body: JSON.stringify({ item: item.id, quantity: quantity }),
        }
      );
      const data = await res.json();
      console.log("ADD TO CART RES", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCookie("cart", cartState);
    if (!cartItems.length) removeCookie("cart");
    console.log("Length", cartItems.length);
  }, [cartItems]);

  const addHandler = (item) => {
    postItemToBackend(item, 1);
    dispatchCart(addItem(item));
  };

  const removeHandler = (item) => {
    postItemToBackend(item, -1);
    dispatchCart(removeItem(item));
  };

  const clearHandler = (item) => {
    postItemToBackend(item, -item.quantity);
    dispatchCart(clearItemFromCart(item));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => addHandler(cartItem)}>
          &#43;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => removeHandler(cartItem)}>
          &#8722;
        </div>
      </div>
      <div className="price">{commafy(price)}</div>
      <div className="remove-button" onClick={() => clearHandler(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
