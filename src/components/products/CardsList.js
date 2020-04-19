import React, { useEffect, useContext } from 'react';
import styles from './CardsList.module.scss';
import Card from '../UI/Card';
import categoryContext from '../../context/CategoryContext';
import {
    productListSend, productListSuccess, productListFail
} from '../../store/actions';

const CardsList = ({match}) => {
    const {state, dispatch} = useContext(categoryContext);    

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://5.9.249.45:8000/menu/${state.subcategory}`);
                const data = await res.json();
                dispatch(productListSuccess(data));
            } catch (error) {
                dispatch(productListFail(error));
            }
        }
        dispatch(productListSend());
        fetchData();
    }, [state.subcategory])

    let content = <p>loading...</p>;
    if (state.productList) {
        content = (state.productList.map((item, index) => (
            <Card key={index} data={item} match={match} />
        )));
    }

    return (
        <section className={styles.CardsList}>
            {content}
        </section>
    )
}

export default CardsList;