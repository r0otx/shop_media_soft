import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {}
});

export const getProductsAPI = {
    getProducts(limit) {
        if (limit) {
            return instance.get('/products?limit=' + limit);
        } else {
            return instance.get('/products');
        }
    },
    getSingleProduct(id) {
        return instance.get('/products/' + id);
    }
}