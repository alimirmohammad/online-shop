import React, {useContext} from 'react';
import styles from './DropDownCategory.module.scss';
import ItemPrimary from '../navigation/SidebarItemPrimary';
import {ReactComponent as ItemIcon} from '../../assets/svg/shopping-bag.svg';
import CategoryContext from '../../context/CategoryContext';

const DropDownCategory = ({onShow, onHide}) => {
    const {state} = useContext(CategoryContext);
    let content = <p>loading...</p>
    if (state.categoryList) {
        content = (state.categoryList.map((categoryObj, index) => (
            <ItemPrimary key={index} Icon={ItemIcon} text={Object.keys(categoryObj)} />
        )));
    }

    return (
        <ul className={styles.List} onMouseEnter={onShow} onMouseLeave={onHide} onClick={onHide}>
            {content}
        </ul>
    )
}

export default DropDownCategory;