import React from 'react';
import styles from './Hero.module.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <div className={styles.Items}>
                <img src={logo} className={styles.Logo} />
                <h1>با اطمینان از باران خرید کنید</h1>
                <div className={styles.BtnBox}>
                    <Link to="/login" className={`${styles.Btn} ${styles.Fill}`}>ورود</Link>
                    <Link to="/signup" className={`${styles.Btn} ${styles.Unfill}`}>ثبت نام</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;