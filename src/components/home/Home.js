import React, { useContext } from 'react';
import styles from './Home.module.scss';
import Hero from './Hero';
import Features from './Features';
import FeaturedProducts from './FeaturedProducts';
import Steps from './Steps';
import Promotion from './Promotion';
import CategoryContext from '../../context/CategoryContext';

const Home = () => {
    const {state} = useContext(CategoryContext);
    return (
        <div className={styles.Home}>
            
            <Hero />
            <Features />
            <h2>کالاهای جدید</h2>
            <FeaturedProducts data={state.newList} />
            <Steps />
            <h2>کالاهای شگفت‌انگیز</h2>
            <FeaturedProducts data={state.amazingList} />
            <Promotion />
            <h2>کالاهای پرفروش</h2>
            <FeaturedProducts data={state.topList} />
                        
        </div>
    )
}

export default Home;
