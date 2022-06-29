import React from "react";
import Breadcrumbs from "../../../../utils/Breadcrumbs/Breadcrumbs";

const Address = ({breadcrumbLinks}) => {
    return (
        <div>
            <Breadcrumbs pages={breadcrumbLinks}/>
            <div>Address</div>
        </div>
    );
};

export default Address;