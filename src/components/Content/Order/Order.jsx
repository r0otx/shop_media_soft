import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs/Breadcrumbs";
import classNames from "classnames";
import "./Order.scss";

const Order = ({breadcrumbLinks}) => {

    const order = Math.ceil(Math.random() * 9999)

    return (
        <div>
            <Breadcrumbs pages={breadcrumbLinks} />
            <div className={classNames('order')}>
            <div className={classNames('order__thanks')}>
                Thank you for your purchase!
            </div>
            <div className={classNames('order__number')}>
                Order# {order}
            </div>
            </div>
        </div>
    );
};

export default Order;