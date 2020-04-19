import React from 'react';
import styles from './CartPage.module.scss';
import Card from '../UI/Card';

const CartPage = () => {
    return (
        <section className={styles.Page}>
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default CartPage;