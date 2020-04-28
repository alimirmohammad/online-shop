import React from "react";
import "./CartItem.scss";
import { commafy } from "../../utils/commafy";

const CartItem = ({ item: { image, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image} alt="item" />
      <div className="item-details">
        <span className="name">{name.slice(0, 20)}</span>
        <span className="price">
          {quantity} * {commafy(price)} تومان
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
