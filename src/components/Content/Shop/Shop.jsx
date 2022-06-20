import React from "react";
import "./Shop.scss"
import classNames from "classnames";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";

const Shop = () => {
    return (
        <div className={classNames('shop')}>
            <Filters/>
            <Products/>
        </div>
    );
};

export default Shop;