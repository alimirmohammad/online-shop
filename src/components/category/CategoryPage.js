import React, {useContext, useEffect} from 'react';
import styles from './CategoryPage.module.scss';
import Sidebar from '../navigation/Sidebar';
import Container from './Container';
import CardsList from '../products/CardsList';
import CartPage from '../cart/CartPage';
import categoryContext from '../../context/CategoryContext';
import {categorySet, subcategorySet, productSet} from '../../store/actions';

const CategoryPage = ({ads, products, cart, match}) => {
    const {dispatch} = useContext(categoryContext);
    const {category, subcategory, product} = match.params;

    useEffect(() => {
        dispatch(categorySet(category));
        dispatch(subcategorySet(subcategory));
        dispatch(productSet(product));
    }, [category, subcategory, product])
    
    return (
        <div className={styles.CategoryPage}>
            <Sidebar match={match} />
            {ads && <Container match={match} />}
            {products && <CardsList match={match} />}
            {cart && <CartPage />}            
        </div>
    )
}

export default CategoryPage;