import React, { useContext } from 'react';
import styles from './Sidebar.module.scss';
import SidebarItemPrimary from './SidebarItemPrimary';
import SidebarItemSecondary from './SidebarItemSecondary';
import { ReactComponent as ItemIcon } from '../../assets/svg/shopping-bag.svg';
import CategoryContext from '../../context/CategoryContext';

const Sidebar = () => {
    const { state } = useContext(CategoryContext);

    let content = <p>loading...</p>
    if (state.categoryList && state.category) {
        const elObj = state.categoryList.find(item => Object.keys(item)[0] === state.category);
        content = (
            <>
                <SidebarItemPrimary Icon={ItemIcon} text={state.category} />
                {Object.values(elObj)[0].map((subcategoryObj, index) => (
                    <SidebarItemSecondary key={index} category={state.category} text={Object.keys(subcategoryObj)} />))}
                {state.categoryList.filter(item => Object.keys(item)[0] !== state.category).map(
                    (item, i) => <SidebarItemPrimary key={i} Icon={ItemIcon} text={Object.keys(item)[0]} />
                )}
            </>
        )
    }

    return (
        <div className={styles.Sidebar}>
            <h4>دسته‌بندی کالاها</h4>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default Sidebar;