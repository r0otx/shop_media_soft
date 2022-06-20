import {takeEvery, call, put} from "redux-saga/effects";
import {GET_PRODUCTS} from "../constants";
import {setData, setError, setLoading} from "../actions/products";
import {getProductsAPI} from "../../api";

function* getProductsWorker () {
    yield put(setLoading(true));
    try {
        const res = yield call(getProductsAPI.getProducts, 15);
        yield put(setData(res.data));
    } catch (error) {
        yield put(setError(error.message));
    }
    yield put(setLoading(false));
}

export function* getProductsWatcher () {
    yield takeEvery(GET_PRODUCTS, getProductsWorker)
}