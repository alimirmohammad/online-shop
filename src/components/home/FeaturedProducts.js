import React from 'react';
import styles from './FeaturedProducts.module.scss';
import Slider from '../UI/slider/Slider';

const FeaturedProducts = ({data}) => {
    return (
        <div className={styles.FeaturedProducts}>
            <Slider data={data} />
        </div>
    )
}

export default FeaturedProducts;