import {IProducts} from "../interface/interfaceProducts";

export const filterProducts = (products: IProducts[], category: string, searchTerm: string): IProducts[] => {
    let filteredProducts = [...products];//

    if (category) {
        filteredProducts = filteredProducts.filter((item: IProducts) =>
            item.category.toLowerCase().includes(category.toLowerCase())
        );
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter((item: IProducts) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return filteredProducts;
};
