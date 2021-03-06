import React, { useContext, useEffect } from "react";
import styles from "./ProductPage.module.scss";
import { withRouter } from "react-router-dom";
import categoryContext from "../../context/CategoryContext";
import cartContext from "../../context/CartContext";
import { productSet } from "../../store/actions";
import { useCookies } from "react-cookie";
import { addItem } from "../../store/actions";
import { commafy } from "../../utils/commafy";

const ProductPage = ({ match }) => {
  const { subcategory, product } = match.params;
  const [cookies, setCookie, removeCookie] = useCookies(["token", "cart"]);
  const { state, dispatch } = useContext(categoryContext);
  const { cartState, dispatchCart } = useContext(cartContext);

  useEffect(() => {
    setCookie("cart", cartState);
  }, [cartState]);

  const addToCartHandler = async (product) => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    };

    dispatchCart(addItem(itemToAdd));

    try {
      const res = await fetch(
        "http://5.9.249.45:8000/finance/MyShoppingCart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `jwt ${cookies.token}`,
          },
          body: JSON.stringify({ item: product.id, quantity: 1 }),
        }
      );
      const data = await res.json();
      console.log("ADD TO CART RES", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `http://5.9.249.45:8000/menu/${subcategory}/${product}/`
      );
      const data = await res.json();
      dispatch(productSet(data));
    }
    getData();
  }, []);

  let content = <p>loading...</p>;

  if (state.product) {
    const { product } = state;
    content = (
      <div className={styles.ProductPage}>
        <div className={styles.Description}>
          <h4>برند: {product.brand}</h4>
          <h2>نام محصول: {product.name}</h2>
          <ul>
            <li>دسته‌بندی: {product.category}</li>
            <li>توضیحات: {product.description}</li>
            <li>قیمت (تومان): {commafy(product.price)}</li>
            <li>تعداد موجود: {product.quantity}</li>
          </ul>
          <button
            onClick={() => addToCartHandler(product)}
            className={styles.Btn}
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div className={styles.ImgContainer}>
          <img src={product.image} />
        </div>
      </div>
    );
  }
  return content;
};

export default withRouter(ProductPage);
