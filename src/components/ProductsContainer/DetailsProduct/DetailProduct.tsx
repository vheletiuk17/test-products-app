import React, {FC} from 'react';
import {IProducts} from "../../../interface/interfaceProducts";
import {NavLink} from "react-router-dom";
import css from './detailProduct.module.css'

interface IProps{
    detail:IProducts
}

const DetailProduct:FC<IProps> = ({detail}) => {
    const { title, images, price, description, category} = detail
    return (
        <div className={css.father}>
            <div className={css.content}>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>{category}</p>
            <p>Description: {description}</p>
            <img className={css.img} src={images} alt={title}/>
            </div>
            <NavLink className={css.back_products_btn} to={'/products'}>Back to products</NavLink>
        </div>
    );
};

export {DetailProduct};