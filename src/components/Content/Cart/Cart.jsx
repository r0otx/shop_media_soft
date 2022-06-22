import React from "react";
import "./Cart.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";
import Card from "../Shop/Products/Card/Card";


const Cart = () => {
    const products = useSelector(state => state.products);

    return (
        <div className={classNames('cart')}>
            {products.cart.length
                ? <Card products={products} items={products.cart} />
                : <h1>Cart is empty</h1>
            }
        </div>
    );
};

export default Cart;