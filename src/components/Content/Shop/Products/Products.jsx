import React from "react";
import "./Products.scss"
import classNames from "classnames";
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {addToCart} from "../../../../redux/actions/products";

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

    return (
        <div className={classNames('products')}>
            <div className={classNames('products__card')}>
                <Card products={products} items={searchQuery} addCart={addCart} />
            </div>
        </div>
    );
};

export default Products;