import React from 'react';
import styles from './Features.module.scss';
import { ReactComponent as Card } from '../../assets/svg/credit-card.svg';
import { ReactComponent as Gift } from '../../assets/svg/gift.svg';
import { ReactComponent as Phone } from '../../assets/svg/phone.svg';
import { ReactComponent as PriceTag } from '../../assets/svg/price-tag.svg';

const Features = () => {
    return (
        <section className={styles.Features}>
            <div className={styles.Feature}>
                <Card className={styles.Icon} />
                <h4 className={styles.Heading}>پرداخت با کارت بانکی</h4>
                <p className={styles.Text}>
                    شما می‌توانید پرداخت خود را با استفاده از کارت‌های بانکی عضو شبکه شتاب،
                     به صورت آنلاین و یا در محل انجام دهید.
                </p>
            </div>
            <div className={styles.Feature}>
                <Gift className={styles.Icon} />
                <h4 className={styles.Heading}>جوایز متعدد</h4>
                <p className={styles.Text}>
                    با انجام خریدهای بالای ۵۰،۰۰۰ تومان در قرعه‌کشی هفتگی و با انجام خریدهای بالای ۱۰۰،۰۰۰ تومان در قرعه‌کشی ماهانه شرکت کنید
                </p>
            </div>
            <div className={styles.Feature}>
                <Phone className={styles.Icon} />
                <h4 className={styles.Heading}>پشتیبانی ۲۴ ساعته</h4>
                <p className={styles.Text}>
                    همکاران ما در واحد پشتیبانی، ۷ روز هفته و ۲۴ ساعت شبانه‌روز آماده رسیدگی به درخواست‌ها و پاسخگوی پرسش‌های شما می‌باشند.
                </p>
            </div>
            <div className={styles.Feature}>
                <PriceTag className={styles.Icon} />
                <h4 className={styles.Heading}>جشنواره‌های مناسبتی</h4>
                <p className={styles.Text}>
                    در مناسبت‌های مختلف منتظر جشنواره‌های شگفت‌انگیز ما با تخفیف‌های هیجان‌انگیز باشید.
                </p>
            </div>
        </section>
    )
}

export default Features;