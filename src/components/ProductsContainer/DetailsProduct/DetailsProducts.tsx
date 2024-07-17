import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {productActions} from "../../../redux/slice/productSlice";
import {DetailProduct} from "./DetailProduct";
import {useParams} from "react-router-dom";
import css from './detailsProducts.module.css'

const DetailsProducts = () => {

    const {details} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            dispatch(productActions.getById({id: +id}));
        }
    }, [dispatch, id]);

    return (
        <div className={css.father_container}>

            {details && <DetailProduct detail={details} key={details.id}/>}
        </div>
    );
};

export {DetailsProducts};