import React, {FC} from 'react';
import {IProducts} from "../../interface/interfaceProducts";


interface IProps{
    detail:IProducts
}

const DetailProduct:FC<IProps> = ({detail}) => {
    const { title, images, price, description, category} = detail
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>{category}</p>
            <p>Description: {description}</p>
            <img src={images} alt={title}/>

        </div>
    );
};

export {DetailProduct};