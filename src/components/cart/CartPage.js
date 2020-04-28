import React, { useContext } from "react";
import "./CartPage.scss";
import CartContext from "../../context/CartContext";
import CheckoutItem from "./CheckoutItem";
import { commafy } from "../../utils/commafy";

const CartPage = () => {
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useContext(CartContext);
  const total = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  );

  let content = <div className="checkout-page">سبد خرید شما خالی است</div>;

  if (total) {
    content = (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>محصول</span>
          </div>
          <div className="header-block desc">
            <span>توضیحات</span>
          </div>
          <div className="header-block">
            <span>تعداد</span>
          </div>
          <div className="header-block">
            <span>قیمت</span>
          </div>
          <div className="header-block">
            <span>حذف</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>مجموع: {commafy(total)} تومان</span>
        </div>
      </div>
    );
  }

  return content;
};

export default CartPage;
