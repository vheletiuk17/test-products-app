import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {productActions} from '../../redux/slice/productSlice';
import {Product} from './Product';
import {IProducts} from '../../interface/interfaceProducts';
import css from './products.module.css';
import {filterProducts} from "../filters";

const Products = () => {
    const {products, selectedCategory, searchTerm} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();

    const filteredProducts = filterProducts(products, selectedCategory || '', searchTerm || '');

    useEffect(() => {

        dispatch(productActions.getAll());
    }, [dispatch]);


    return (
        <div className={css.father}>
            {filteredProducts.map((item: IProducts) => (
                <Product key={item.id} item={item}/>
            ))}
        </div>
    );
};


export {Products};
