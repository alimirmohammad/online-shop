import React from 'react';
import styles from './Steps.module.scss';
import {ReactComponent as One} from '../../assets/svg/filter_1.svg';
import {ReactComponent as Two} from '../../assets/svg/filter_2.svg';
import {ReactComponent as Three} from '../../assets/svg/filter_3.svg';
import {ReactComponent as Four} from '../../assets/svg/filter_4.svg';

const Steps = () => {
    return (
        <section className={styles.Steps}>
            <div className={styles.Items}>
                <h4>چگونه از باران خرید کنم؟</h4>
                <ul>
                    <li>
                        <One className={styles.Icon} />
                        <span>ثبت نام در سایت</span>
                    </li>
                    <li>
                        <Two className={styles.Icon} />
                        <span>انتخاب محصولات</span>
                    </li>
                    <li>
                        <Three className={styles.Icon} />
                        <span>ثبت سفارش</span>
                    </li>
                    <li>
                        <Four className={styles.Icon} />
                        <span>پرداخت آنلاین و یا درب منزل</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Steps;