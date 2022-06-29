import React from "react";
import "./Card.scss"
import classNames from "classnames";
import Button from "../../../../../common/Button/Button";
import priceNormalizer from "../../../../../utils/PriceNormalizer/priceNormalizer";
import Preloader from "../../../../../utils/Preloader/Preloader";

const Card = ({products, items, addCart, upQuantity, downQuantity}) => {
    return (
        <>
            {products.isLoading
                ? <Preloader/>
                : !products.error
                    ? items.length
                        ? items.map(el =>
                            <div key={el.id} className={classNames('card')}>
                                <div className={classNames('card__img')}>
                                    <img className={classNames('card__image')} src={el.image} alt={el.title}/>
                                </div>
                                <div className={classNames('card__title')}>{el.title}</div>
                                <div className={classNames('card__rating')}>Rating: {el.rating.rate} of 5</div>
                                <div className={classNames('card__price')}>Price: {priceNormalizer(el.price)}</div>

                                {!el.count
                                    ? <div className={classNames('card__buy', 'button')}>
                                        <Button onClick={() => addCart(el)}>Add cart</Button>
                                    </div>
                                    : <div className={classNames('card__count', 'quantity')}>
                                        <div className={classNames('quantity__down', 'button')}>
                                            <Button onClick={() => downQuantity(el.id)}>-</Button>
                                        </div>
                                        <div className={classNames('quantity__count')}>
                                            <input disabled placeholder={el.count ? el.count : 0}/>
                                        </div>
                                        <div className={classNames('quantity__up', 'button')}>
                                            <Button onClick={() => upQuantity(el.id)}>+</Button>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                        : <h1>Not found</h1>
                    : products.error
            }
        </>
    );
};

export default Card;