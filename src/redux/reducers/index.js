import {combineReducers} from "redux";
import productsReducer from "./products";
import userReducer from "./user";
import addressReducer from "./address";

const reducers = combineReducers({
    products: productsReducer,
    user: userReducer,
    address: addressReducer
})

export default reducers;