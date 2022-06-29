import React from "react";
import Breadcrumbs from "../../../../utils/Breadcrumbs/Breadcrumbs";
import Ymap from "./YMap/Ymap";
import classNames from "classnames";
import "./Address.scss";
import Input from "../../../../common/Input/Input";
import {NavLink} from "react-router-dom";
import Button from "../../../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setAddress} from "../../../../redux/actions/address";

const Address = ({breadcrumbLinks}) => {

    const address = useSelector(state => state.address);
    const dispatch = useDispatch();

    const inputHandle = (e) => {
        dispatch(setAddress(e))
    }

    return (
        <div>
            <Breadcrumbs pages={breadcrumbLinks}/>
            <div className={classNames('address')}>
            <div className={classNames('address__map')}>
                <Ymap/>
            </div>
            <div className={classNames('address__form')}>
                Country: <Input value={address.country} onChange={(e) => inputHandle({country: e.target.value})}/>
                City: <Input value={address.city} onChange={(e) => inputHandle({city: e.target.value})}/>
                Street: <Input value={address.street} onChange={(e) => inputHandle({street: e.target.value})} />
                Building: <Input value={address.building} onChange={(e) => inputHandle({building: e.target.value})}/>
                Apt: <Input value={address.apt} onChange={(e) => inputHandle({apt: e.target.value})} />
                Zip: <Input value={address.zip} onChange={(e) => inputHandle({zip: e.target.value})} />
                <div className={classNames('address__purchase', 'button')}>
                    <NavLink to={'/order'}><Button>Purchase</Button></NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Address;