import {GET_PRODUCTS, SET_LOADING, SET_PRODUCTS, SET_ERROR, SET_SORT} from "../constants";

export const getData = () => ({
    type: GET_PRODUCTS
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setData = (payload) => ({
    type: SET_PRODUCTS,
    payload
})

export const setError = (payload) => ({
    type: SET_ERROR,
    payload
})

export const setSort = (payload) => ({
    type: SET_SORT,
    payload
})