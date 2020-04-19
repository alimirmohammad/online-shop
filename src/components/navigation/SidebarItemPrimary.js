import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarItemPrimary.module.scss';

const SidebarItemPrimary = ({ Icon, text }) => {
    return (
        <NavLink to={`/${text}`} activeClassName={styles.Active}>
            <li className={styles.Item}>
                <Icon className={styles.Icon} />
                <span className={styles.Text}>{text}</span>
            </li>
        </NavLink>
    )
}

export default SidebarItemPrimary;