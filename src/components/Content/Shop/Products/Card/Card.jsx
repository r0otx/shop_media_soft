import React from "react";
import "./Card.scss"
import classNames from "classnames";
import Button from "../../../../../common/Button/Button";
import priceNormalizer from "../../../../../utils/priceNormalizer";

const Card = ({products, items, addCart}) => {
    return (
        <>
            {products.isLoading
                ? <h1>Loading...</h1>
                : !products.error
                    ? items.length
                        ? items.map(el =>
                            <div key={el.id} className={classNames('card')}>
                                <div className={classNames('card__img')}>
                                    <img className={classNames('card__image')} src={el.image} alt={el.title}/>
                                </div>
                                <div className="card__title">{el.title}</div>
                                <div className="card__rating">Rating: {el.rating.rate} of 5</div>
                                <div className="card__price">Price: {priceNormalizer(el.price)}</div>
                                <div className="card__buy button">
                                    <Button onClick={() => addCart(el)}>Add cart</Button>
                                </div>
                            </div>
                        )
                        : <h1>Not found</h1>
                    : products.error
            }
        </>
    );
};

export default Card;