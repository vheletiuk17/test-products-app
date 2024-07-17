import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IProducts, IProductsP} from "../interface/interfaceProducts";

const productsService = {
    getAll:(page:number):IRes<IProductsP> => apiService.get(urls.product, {params:{page}}),
    getById:(id:number):IRes<IProducts> => apiService.get(urls.byId(id))
}

export {
    productsService
}