import React from 'react';
import ProductGrid from '../../components/ProductGrid/productGrid';
import style from './homePage.module.css'

const Home = () => {
    return (
        <div className={style.homeContainer}>
            <ProductGrid/>
            <p>asd</p>
        </div>
    );
}

export default Home;
