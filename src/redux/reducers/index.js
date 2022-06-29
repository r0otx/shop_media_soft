import {combineReducers} from "redux";
import productsReducer from "./products";
import userReducer from "./user";

const reducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

export default reducers;