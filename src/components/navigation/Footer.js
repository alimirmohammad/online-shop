import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Apple } from '../../assets/svg/apple.svg';
import { ReactComponent as GooglePlay } from '../../assets/svg/googleplay.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div>
                <ul className={styles.Contact}>
                    <li>تماس با ما</li>
                    <li>پیشنهادها و انتقادها</li>
                    <li>فرصت‌های شغلی</li>
                </ul>
            </div>
            <div>
                <h4>دانلود اپلیکیشن فروشگاه باران</h4>
                <div className={styles.BtnBox}>
                    <button className={styles.Fill}>
                        <span>دانلود</span>
                        <GooglePlay className={styles.BtnIcon} />
                    </button>
                    <button className={styles.Unfill}>
                        <span>دانلود</span>
                        <Apple className={styles.BtnIcon} />
                    </button>
                </div>
            </div>
            <div>
            <h4>باران را در شبکه‌های اجتماعی دنبال کنید</h4>
                <ul className={styles.SocialBox}>
                    <li><Instagram className={styles.Social} /></li>
                    <li><Telegram className={styles.Social} /></li>
                    <li><Twitter className={styles.Social} /></li>
                    <li><Youtube className={styles.Social} /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;