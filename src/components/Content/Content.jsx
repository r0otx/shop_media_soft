import React from "react";
import "./Content.scss"
import classNames from "classnames";
import {Route, Routes} from "react-router-dom";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import User from "./Order/User/User";
import PaymentInfo from "./Order/PaymentInfo/PaymentInfo";
import Address from "./Order/Address/Address";

const Content = () => {

    const breadcrumbLinks = [
        {link: '/order/user', title: 'User'},
        {link: '/order/payment', title: 'Payment'},
        {link: '/order/address', title: 'Address'},

    ];

    return (
        <main className={classNames('main')}>
            <div className={classNames('main__container')}>
            <Routes>
                <Route exact path='/' element={<Shop/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/order' element={<Order breadcrumbLinks={breadcrumbLinks} />} />
                <Route path='/order/user' element={<User breadcrumbLinks={breadcrumbLinks} />} />
                <Route path='/order/payment' element={<PaymentInfo breadcrumbLinks={breadcrumbLinks} />} />
                <Route path='/order/address' element={<Address breadcrumbLinks={breadcrumbLinks} />} />
            </Routes>
            </div>
        </main>
    );
};

export default Content;