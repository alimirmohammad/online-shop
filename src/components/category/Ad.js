import React from 'react';
import styles from './Ad.module.scss';

const Ad = ({src, text}) => {
    return (
        <div className={styles.Ad}>
            <img src={src} />
            <p>{text}</p>
        </div>
    )
}

export default Ad;