import React from 'react';
import styles from './LeftArrow.module.scss';
import {ReactComponent as Icon} from '../../../assets/svg/arrow-left.svg';

const LeftArrow = (props) => {
    return (
        <div className={styles.LeftArrow} onClick={props.goToNextSlide}>
            <Icon className={styles.Icon} />
        </div>
    )
}

export default LeftArrow;