import React, { useContext } from 'react';
import styles from './Slide.module.scss';
import { ReactComponent as Price } from '../../../assets/svg/price-tag.svg';
import { ReactComponent as Product } from '../../../assets/svg/shopping-bag.svg';
import { Link } from 'react-router-dom';
import CategoryContext from '../../../context/CategoryContext';

const Slide = ({ activeIndex, data }) => {
  const { state } = useContext(CategoryContext);
  let content = <p>loading...</p>;
  if (data) {
    content = (
      data.slice(activeIndex, activeIndex + 4).map((s, index) => {
        let category, subcategory, product;

        if (s.product_detail) {
          const urlSplit = s.product_detail.split('/');
          product = urlSplit[urlSplit.length - 2];
          subcategory = urlSplit[urlSplit.length - 3];
        }

        for (let categoryObj of state.categoryList) {
          category = Object.values(categoryObj)[0].find(subcategoryObj =>
            Object.keys(subcategoryObj)[0] === subcategory
          );
          if (category) {
            category = Object.keys(categoryObj)[0];
            break;
          };
        }

        return (
          <Link key={index} to={s.product_detail ? `/${category}/${subcategory}/${product}` : '#'}>
            <div className={styles.Item}>
              <img src={s.image && s.image.startsWith('http') ? s.image : 'http://5.9.249.45:8000' + s.image} alt="product" className={styles.Image} />
              <p className={styles.Text}>
                <Product className={styles.Icon} /><span>{s.name || s.product}</span>
              </p>
              <p className={styles.Text}>
                <Price className={styles.Icon} /><span>{s.price} تومان</span>
              </p>
            </div>
          </Link>
        );
      })
    );
  }
  return (
    <section className={styles.Slide}>
      {content}
    </section>
  )
}

export default Slide;