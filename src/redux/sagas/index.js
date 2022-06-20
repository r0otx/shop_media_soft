import {getProductsWatcher} from "./getProducts";

export function* rootSaga () {
    yield getProductsWatcher();
}