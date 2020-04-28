import React, { useContext } from "react";
import CartItem from "./CartItem";
import CustomButton from "../UI/CustomButton";
import "./CartDropdown.scss";
import CartContext from "../../context/CartContext";
import {withRouter} from 'react-router-dom';

const CartDropdown = ({ history, dispatch, onShow, onHide }) => {
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useContext(CartContext);
  return (
    <div
      className="cart-dropdown"
      onMouseEnter={onShow}
      onMouseLeave={onHide}
      onClick={onHide}
    >
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">سبد خرید شما خالی است</span>
        )}
        {/* <span className="empty-message">سبد خرید شما خالی است</span> */}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/cart");
          //   dispatch(toggleCartHidden());
        }}
      >
        رفتن به سبد خرید
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
