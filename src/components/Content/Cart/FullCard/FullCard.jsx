import React from "react";
import "./FullCard.scss";
import classNames from "classnames";
import Button from "../../../../common/Button/Button";
import {useDispatch} from "react-redux";
import {setDownQuantity, setUpQuantity} from "../../../../redux/actions/products";

const FullCard = ({inCart}) => {

    const dispatch = useDispatch();
    const quantityHandle = (type, id) => {
        if (type === '-') {
            dispatch(setDownQuantity(id));
        }
        if (type === '+') {
            dispatch(setUpQuantity(id));
        }
    }

    return (
        <>
            {inCart.map(el =>
                <div key={el.title} className={classNames('fullCard')}>
                    <div className={classNames('fullCard__image')}>
                        <img src={el.image} alt={el.title} />
                    </div>
                    <div className={classNames('fullCard__info')}>
                        <div className={classNames('fullCard__title')}>
                            {el.title}
                        </div>
                        <div className={classNames('fullCard__description')}>
                            Description: {el.description}
                        </div>
                        <div className={classNames('fullCard__count')}>
                            Count: {el.rating.count}
                        </div>
                        <div className={classNames('fullCard__rating')}>
                            Rate: {el.rating.rate}
                        </div>
                        <div className={classNames('fullCard__price')}>
                            Price: {el.price}
                        </div>
                        <div className={classNames('fullCard__quantity')}>
                        <div className={classNames('quantity__down', 'button')}>
                            <Button onClick={() => quantityHandle('-', el.id)}>-</Button>
                        </div>
                        <div className={classNames('quantity__count')}>
                            <input disabled placeholder={el.count ? el.count : 0}/>
                        </div>
                        <div className={classNames('quantity__up', 'button')}>
                            <Button onClick={() => quantityHandle('+', el.id)}>+</Button>
                        </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default FullCard;