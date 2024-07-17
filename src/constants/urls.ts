const baseURL = 'https://dummyjson.com'

const products = '/products'


const urls = {
    product: products,
    byId: (id: number): string => `/products/${id}`
}

export {
    baseURL, urls
}