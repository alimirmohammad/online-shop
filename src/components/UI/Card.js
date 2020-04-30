import React from "react";
import styles from "./Card.module.scss";
import { ReactComponent as Icon1 } from "../../assets/svg/shop.svg";
import { ReactComponent as Icon2 } from "../../assets/svg/folder_open.svg";
import { ReactComponent as Icon3 } from "../../assets/svg/hash.svg";
import { ReactComponent as Icon4 } from "../../assets/svg/attach_money.svg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { commafy } from "../../utils/commafy";

const Card = ({ data, match }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  let product;
  if (data.detail) {
    const urlSplit = data.detail.split("/");
    product = urlSplit[urlSplit.length - 2];
  }

  // const addToCartHandler = async (name) => {
  //   try {
  //     const res = await fetch(
  //       "http://5.9.249.45:8000/finance/MyShoppingCart/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `jwt ${cookies.token}`,
  //         },
  //         body: JSON.stringify({ item: name, quantity: 1 }),
  //       }
  //     );
  //     const data = await res.json();
  //     console.log("ADD TO CART RES", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.Card}>
      <img src={data.image} alt="product" className={styles.Img} />
      <h5 className={styles.Name}>
        <Link to={`${match.url}/${product}`}>{data.name}</Link>
      </h5>
      <div className={styles.Brand}>
        <Icon1 className={styles.Icon} />
        <p>{data.brand}</p>
      </div>
      <div className={styles.Warranty}>
        <Icon2 className={styles.Icon} />
        <p>{data.category}</p>
      </div>
      <div className={styles.Made}>
        <Icon3 className={styles.Icon} />
        <p>موجودی: {data.quantity}</p>
      </div>
      <div className={styles.Price}>
        <Icon4 className={styles.Icon} />
        <p>{data.price && commafy(data.price)} تومان</p>
      </div>
      {/* <button className={styles.Btn} onClick={() => addToCartHandler(data.name)}>افزودن به سبد خرید</button> */}
    </div>
  );
};

export default Card;
