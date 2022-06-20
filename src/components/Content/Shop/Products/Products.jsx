import React from "react";
import "./Products.scss"
import classNames from "classnames";
import Card from "./Card/Card";

const Products = () => {
    return (
        <div className={classNames('products')}>
            <div className={classNames('products__card')}>
                <Card/>
            </div>
        </div>
    );
};

export default Products;