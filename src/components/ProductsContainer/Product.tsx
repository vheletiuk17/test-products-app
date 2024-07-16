import React, {FC, useState} from 'react';
import {IProducts} from '../../interface/interfaceProducts';
import css from './product.module.css'
import {NavLink} from "react-router-dom";
import {DetailsPage} from "../../page/DetailsPage";

interface IProps {
    item: IProducts;
}

const Product: FC<IProps> = ({item}) => {
    const { title, images, price, category} = item;

     const [searchTerm] = useState<string>('');

    // Фільтруємо товари за пошуковим терміном
    if (searchTerm && !title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return null; // Приховуємо товар, якщо він не відповідає пошуковому терміну
    }


    return (
        <div className={css.father_container}>
            <div className={css.content_container}>
                <h3>{title}</h3>
                <p>Price: ${price}</p>
                <p>{category}</p>
                <img src={images} alt={title}/>
                <NavLink to={'/details'}>Details</NavLink>
            </div>
        </div>
    );
};

export {Product};
