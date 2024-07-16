export interface IProducts{
    id: number,
    title: string,
    description: string
    category: string,
    price: number,
    images: string
}

export interface IProductsP{
    products: IProducts[],
    page:number | null
    prev:number | null
    next:number | null
    total_pages: number | null
}