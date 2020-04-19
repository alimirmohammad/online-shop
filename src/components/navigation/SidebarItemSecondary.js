import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarItemSecondary.module.scss';

const SidebarItemSecondary = ({ category, text }) => {
    return (
        <NavLink to={`/${category}/${text}`}>
            <li className={styles.Item}>
                <span className={styles.Text}>{text}</span>
            </li>
        </NavLink>
    )
}

export default SidebarItemSecondary;