import React from "react";
import "./Products.scss"
import classNames from "classnames";
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {addToCart, setDownQuantity, setUpQuantity} from "../../../../redux/actions/products";

const Products = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const searchQuery = useMemo(() => {
        if (products.findInput) {
            return products.products.filter(el => el.title.toString().toLowerCase().includes(products.findInput));
        }
        return products.products;
    }, [products.products, products.findInput]);

    const addCart = (item) => {
        dispatch(addToCart(item));
    }

    const downQuantity = (id) => {
        dispatch(setDownQuantity(id))
    }

    const upQuantity = (id) => {
        dispatch(setUpQuantity(id))
    }

    return (
        <div className={classNames('products')}>
            <div className={classNames('products__card')}>
                <Card products={products} items={searchQuery} addCart={addCart} upQuantity={upQuantity} downQuantity={downQuantity} />
            </div>
        </div>
    );
};

export default Products;