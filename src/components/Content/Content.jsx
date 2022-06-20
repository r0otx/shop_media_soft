import React from "react";
import "./Content.scss"
import classNames from "classnames";
import {Route, Routes} from "react-router-dom";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";

const Content = () => {
    return (
        <main className={classNames('main')}>
            <div className={classNames('main__container')}>
            <Routes>
                <Route exact path='/' element={<Shop/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/order' element={<Order/>} />
            </Routes>
            </div>
        </main>
    );
};

export default Content;