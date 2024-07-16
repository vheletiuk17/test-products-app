import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {productActions} from "../../redux/slice/productSlice";
import {DetailProduct} from "./DetailProduct";

const DetailsProducts = () => {

    // const {details, page} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //
    //     // @ts-ignore
    //     dispatch(productActions.getAll({page}));
    // }, [dispatch, page]);

    return (
        <div>
            {/*{details &&  <DetailProduct detail={} }/>)}*/}
        </div>
    );
};

export {DetailsProducts};