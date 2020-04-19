import React, { useState, useEffect, useContext } from 'react';
import styles from './LoginPage.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Key } from '../../assets/svg/key.svg';
import { ReactComponent as UserPlus } from '../../assets/svg/user-plus.svg';
import authContext from '../../context/authContext';
import {login} from '../../store/actions';
import { useCookies } from 'react-cookie';

const LoginPage = ({ signup }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const {authState, dispatchAuth} = useContext(authContext);
    const [state, setState] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const changeHandler = event => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('AUTH STATE', authState);
    }, [authState])

    const submitHandler = async event => {
        event.preventDefault();
        if (signup) {
            const {password, confirmPassword} = state;
            if (password !== confirmPassword) {
                alert('رمز عبورها مطابقت ندارند');
                return;
            }

        }
        const res = await fetch(`http://5.9.249.45:8000/${signup ? 'signup' : 'login/'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });
        const data = await res.json();
        console.log(data);
        const {token} = data;
        if (token) {
            dispatchAuth(login(token));
            setCookie('token', token, {maxAge: 86400});
        }
        return data;        
    }

    return (
        <section className={styles.LoginPage}>
            <div className={styles.LoginForm}>
                <div className={styles.LinkBox}>
                    <NavLink activeClassName={styles.Active} to="/login" className={styles.Link}>ورود</NavLink>
                    <NavLink activeClassName={styles.Active} to="/signup" className={styles.Link}>ثبت نام</NavLink>
                </div>
                <form onSubmit={submitHandler}>
                    <h3>{signup ? "   ثبت نام در" : "ورود به"} فروشگاه</h3>
                    <div className={styles.FormField}>
                        <label htmlFor="username">نام کاربری:</label>
                        <input onChange={changeHandler} value={state.username} type="text" name="username" id="username" placeholder="Ali" />
                    </div>
                    {signup && <div className={styles.FormField}>
                        <label htmlFor="email">ایمیل:</label>
                        <input onChange={changeHandler} value={state.email} type="email" name="email" id="email" placeholder="you@example.com" />
                    </div>}
                    {signup && <div className={styles.FormField}>
                        <label htmlFor="phone">تلفن:</label>
                        <input onChange={changeHandler} value={state.phone} type="number" name="phone" id="phone" placeholder="09121234567" />
                    </div>}
                    <div className={styles.FormField}>
                        <label htmlFor="password">رمز عبور:</label>
                        <input onChange={changeHandler} value={state.password} type="password" name="password" id="password" placeholder="رمز عبور خود را وارد کنید" />
                    </div>

                    {signup && <div className={styles.FormField}>
                        <label htmlFor="password-repeat">تکرار رمز عبور:</label>
                        <input onChange={changeHandler} value={state.confirmPassword} type="password" name="confirmPassword" id="password-repeat" placeholder="رمز عبور خود را دوباره وارد کنید" />
                    </div>}
                    <button type="submit" className={styles.Btn}>
                        {signup
                            ? <><span>ثبت نام</span><UserPlus className={styles.Icon} /></>
                            : <><span>ورود</span><Key className={styles.Icon} /></>}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage;