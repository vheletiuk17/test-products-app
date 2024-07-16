import React from 'react';
import {Products} from "../components/ProductsContainer/Products";
import {Sort} from "../components/SortContainer/Sort";


const ProductsPage = () => {
    return (
        <div>
            <Sort/>
            <Products/>
        </div>
    );
};

export {ProductsPage};