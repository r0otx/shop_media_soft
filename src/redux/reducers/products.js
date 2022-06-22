import {
    SET_PRODUCTS,
    SET_LOADING,
    SET_ERROR,
    SET_SORT,
    SET_FIND_INPUT,
    ADD_TO_CART
} from "../constants";

const initialState = {
    products: [],
    cart: [],
    total: 0,
    isLoading: false,
    error: '',
    findInput: '',
    sortOption: ''
}

const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case SET_SORT: {
            if (payload === 'title') {
                return {
                    ...state,
                    products: [...state.products].sort((a, b) => a[payload].toString().localeCompare(b[payload].toString())),
                    sortOption: payload
                }
            } else {
                return {
                    ...state,
                    products: [...state.products].sort((a, b) => a[payload] - b[payload]),
                    sortOption: payload
                }
            }
        }
        case SET_FIND_INPUT: {
            return {
                ...state,
                findInput: payload
            }
        }
        case ADD_TO_CART: {

            return {
                ...state,
                cart: [...state.cart, payload]
            }
        }
        default:
            return state
    }
}

export default productsReducer;