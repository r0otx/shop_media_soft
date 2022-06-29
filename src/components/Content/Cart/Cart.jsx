import React from "react";
import "./Cart.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";
import FullCard from "./FullCard/FullCard";
import {selectInCart, selectTotalPrice} from "../../../redux/reselects/products";
import priceNormalizer from "../../../utils/PriceNormalizer/priceNormalizer";
import Button from "../../../common/Button/Button";
import {NavLink} from "react-router-dom";


const Cart = () => {
    const inCart = useSelector(selectInCart);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className={classNames('cart')}>
            <div className={classNames('cart__products')}>
                {inCart.length
                    ? <FullCard inCart={inCart}/>
                    : <h1>Cart is empty</h1>
                }
            </div>
            <div className={classNames('cart__total')}>
                <div className={classNames('cart__subtotal')}>
                    Total: {priceNormalizer(totalPrice)}
                </div>
                <div className={classNames('cart__nextButton', 'button')}>
                    {totalPrice
                        ? <NavLink to={'/order/user'}>
                            <Button>Checkout >>></Button>
                        </NavLink>
                        : <Button>Empty X</Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;