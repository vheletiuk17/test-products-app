import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProducts, IProductsP} from "../../interface/interfaceProducts";
import {productsService} from "../../service/productsService";
import {AxiosError} from "axios";

interface IState {
    products: IProducts[];
    page: number | null;
    selectedCategory: string | null;
    searchTerm: string;
    details:  IProducts | null
}

const initialState: IState = {
    products: [],
    page: null,
    selectedCategory: null,
    searchTerm: '',
    details: null
};

const getAll = createAsyncThunk<IProductsP, { page: number }>(
    'productSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await productsService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const getById = createAsyncThunk<IProducts, {id:number}>(
    'productSlice/getById',
        async ({id}, {rejectWithValue}) => {
            try {
                const {data} = await productsService.getById(id)
                return data
            }catch (e){
                const err = e as AxiosError
                return rejectWithValue(err.response?.data)
            }
        }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProducts[]>) {
            state.products = action.payload;
        },
        setSelectedCategory(state, action: PayloadAction<string | null>) {
            state.selectedCategory = action.payload;
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.products = action.payload.products;
            })
            .addCase(getById.fulfilled, (state, action) =>{
                state.details =action.payload
            })
});


const {reducer: productReducer, actions} = productSlice;

const productActions = {
    ...actions,
    getAll,
    getById
}

export {productReducer, productActions};
