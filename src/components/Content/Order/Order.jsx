import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs/Breadcrumbs";

const Order = ({breadcrumbLinks}) => {

    return (
        <div>
            <Breadcrumbs pages={breadcrumbLinks} />
            <div>Order</div>
        </div>
    );
};

export default Order;