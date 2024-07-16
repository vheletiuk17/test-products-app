import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IProductsP} from "../interface/interfaceProducts";

const productsService = {
    getAll:(page:number):IRes<IProductsP> => apiService.get(urls.product, {params:{page}})
}

export {
    productsService
}