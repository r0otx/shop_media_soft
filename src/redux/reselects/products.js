import { createSelector } from "reselect";

const products = state => state.products.products;

export const selectInCart = createSelector([products], (products) => {
    return products.filter(el => el.count);
})

export const selectTotalPrice = createSelector([products], (products) => {
    return products.filter(el => el.count).reduce((subtotal, item) => subtotal + (item.price * item.count), 0);
})