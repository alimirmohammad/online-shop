import React from 'react';
import styles from './Promotion.module.scss';
import haftsin from '../../assets/img/haftsin.jpg';
import clothing from '../../assets/img/clothing.jpg';

const Promotion = () => {
    return (
        <section className={styles.Promotion}>
            <div className={styles.Item}>
                <h4 className={styles.Heading}>جشنواره نوروزی</h4>
                <div className={styles.ImgBox}>
                    <img src={haftsin} className={styles.Img} />
                </div>
            </div>
            <div className={styles.Item}>
                <h4 className={styles.Heading}>سال نو، لباس نو</h4>
                <div className={styles.ImgBox}>
                    <img src={clothing} className={styles.Img} />
                </div>
            </div>
        </section>
    )
}

export default Promotion;
