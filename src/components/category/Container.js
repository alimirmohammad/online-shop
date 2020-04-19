import React from 'react';
import styles from './Container.module.scss';
import camping from '../../assets/img/camping.jpg';
import kitchen from '../../assets/img/kitchen.jpg';
import laptop from '../../assets/img/laptop.jpg';
import makeup from '../../assets/img/makeup.jpg';
import mobile from '../../assets/img/mobile.jpg';
import sports from '../../assets/img/sports.jpg';
import tv from '../../assets/img/tv.jpg';
import watch from '../../assets/img/watch.jpg';
import Ad from './Ad';

const Container = () => {
    return (
        <div className={styles.Container}>
            <Ad src={camping} text="وسایل سفر" />
            <Ad src={kitchen} text="وسایل آشپزخانه" />
            <Ad src={laptop} text="لپ تاپ" />
            <Ad src={makeup} text="آرایشی و بهداشتی" />
            <Ad src={mobile} text="موبایل" />
            <Ad src={sports} text="ورزشی" />
            <Ad src={tv} text="تلویزیون" />
            <Ad src={watch} text="ساعت" />
        </div>
    )
}

export default Container;