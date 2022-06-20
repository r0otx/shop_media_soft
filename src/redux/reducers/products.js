import {SET_PRODUCTS, SET_LOADING, SET_ERROR, SET_SORT} from "../constants";

const initialState = {
    products: [],
    isLoading: false,
    error: '',
    sort: {
        option: 'title',
        input: ''
    }
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
            return {
                ...state,
                products: [...state.products].sort((a, b) => a[payload.option].toString().localeCompare(b[payload.option].toString())),
                sort: {...payload}
            }
        }
        default:
            return state;
    }
}

export default productsReducer;