import React, {FC, useState} from 'react';
import {IProducts} from '../../interface/interfaceProducts';
import css from './product.module.css'
import {NavLink} from "react-router-dom";


interface IProps {
    item: IProducts;
}

const Product: FC<IProps> = ({item}) => {
    const {id, title, images, price, category} = item;

    const [searchTerm] = useState<string>('');

    if (searchTerm && !title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return null;
    }


    return (
        <div className={css.father_container}>
            <div className={css.content_container}>
                <h3>{title}</h3>
                <p>Price: ${price}</p>
                <p>{category}</p>
                <img src={images} alt={title}/>
                <NavLink className={css.details_btn} to={`/details/${id}`}>Details</NavLink>

            </div>
        </div>
    );
};

export {Product};
