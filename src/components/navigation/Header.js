import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as Enter } from '../../assets/svg/enter.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import authContext from '../../context/authContext';
import { Link } from 'react-router-dom';
import DropDownCategory from '../UI/DropDownCategory';
import {logout} from '../../store/actions';
import { useCookies } from 'react-cookie';

const Header = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const { authState, dispatchAuth } = useContext(authContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const timeoutConst = useRef(null);

    useEffect(() => {
        console.log(timeoutConst);
    }, [showDropdown]);

    const showHandler = () => {
        setShowDropdown(true);
    }

    const hideHandler = () => {
        timeoutConst.current = setTimeout(() => setShowDropdown(false), 250);
    }

    const keepHandler = () => {
        clearTimeout(timeoutConst.current);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const logoutHandler = () => {
        dispatchAuth(logout());
        removeCookie('token');
    }

    return (
        <div className={styles.Header}>
            <div className={styles.RowOne}>
                <div className={styles.LogoBox}>
                    <Link to="/">
                        <img src={logo} className={styles.Logo} />
                    </Link>
                </div>
                <form onSubmit={submitHandler} className={styles.Search}>
                    <input type="text" className={styles.SearchInput} placeholder="جستجو در کالاها" />
                    <button type="submit" className={styles.SearchBtn}>
                        <Search className={styles.SearchIcon} />
                    </button>
                </form>

                <nav className={styles.ItemsLeft}>
                    <div className={styles.UserBox}>
                        {
                            authState.token ?
                                <Exit onClick={logoutHandler} title='خروج' className={`${styles.Icon} ${styles.Logout}`} /> :
                                <Link to="/login">
                                    <Enter title='ورود' className={styles.Icon} />
                                </Link>
                        }
                    </div>
                    <div className={styles.CartBox}>
                        <Link to="/cart">
                            <Cart className={styles.Icon} />
                        </Link>
                    </div>
                </nav>
            </div>
            <div className={styles.RowTwo}>
                <ul className={styles.NavList}>
                    <li className={styles.NavItem} onMouseEnter={showHandler} onMouseLeave={hideHandler}>
                        <Link to="#">
                            <Menu className={styles.Menu} /> <span>دسته‌بندی کالاها</span>
                        </Link>
                        {showDropdown && <DropDownCategory onShow={keepHandler} onHide={hideHandler} />}
                    </li>
                    <li className={styles.NavItem}>
                        <Link to="#">تخفیف‌ها</Link>
                    </li>
                    <li className={styles.NavItem}>
                        <Link to="#">کالاهای پر فروش</Link>
                    </li>
                    <li className={styles.NavItem}>
                        <Link to="#">کالاهای پر بازدید</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;