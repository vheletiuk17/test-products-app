import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {productActions} from '../../redux/slice/productSlice';
import css from './sort.module.css';

const Sort = () => {
    const {products, searchTerm} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();
    const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
    const [inputCategory, setInputCategory] = useState<string>('');

    const handleSortByPrice = () => {
        const sortedProducts = [...products];

        sortedProducts.sort((a, b) => {
            return sortByPriceAsc ? a.price - b.price : b.price - a.price;
        });

        dispatch(productActions.setProducts(sortedProducts));
        setSortByPriceAsc(!sortByPriceAsc);
    };

    const handleInputCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputCategory(event.target.value);
        dispatch(productActions.setSelectedCategory(event.target.value || null));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(productActions.setSearchTerm(event.target.value));
    };

    return (


        <div className={css.father}>
            <div className={css.input_container}>
                <input
                    className={css.input_search_by_product_name}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by product name..."
                />
                <input
                    className={css.input_filter_by_category}
                    type="text"
                    value={inputCategory}
                    onChange={handleInputCategoryChange}
                    placeholder="Filter by category..."
                />
            </div>
            <button className={css.btn_sort} onClick={handleSortByPrice}>
                Price {sortByPriceAsc ? '🠝' : ' 🠟'}
            </button>
        </div>
    )
};

export {Sort};