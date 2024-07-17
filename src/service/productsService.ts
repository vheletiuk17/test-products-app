import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IProducts, IProductsP} from "../interface/interfaceProducts";

const productsService = {
    getAll:():IRes<IProductsP> => apiService.get(urls.product),
    getById:(id:number):IRes<IProducts> => apiService.get(urls.byId(id))
}

export {
    productsService
}