import React from 'react';
import styles from './RightArrow.module.scss';
import {ReactComponent as Icon} from '../../../assets/svg/arrow-right.svg';

const RightArrow = (props) => {
    return (
        <div className={styles.RightArrow} onClick={props.goToPrevSlide}>
            <Icon className={styles.Icon} />
        </div>
    )
}

export default RightArrow;