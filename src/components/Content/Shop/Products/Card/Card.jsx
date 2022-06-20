import React from "react";
import "./Card.scss"
import classNames from "classnames";
import {useSelector} from "react-redux";

const Card = () => {
    const products = useSelector(state => state.products);
    return (
        <>
            {!products.isLoading ? products.products.map(el =>
                <div key={el.id} className={classNames('card')}>
                    <div className={classNames('card__img')}>
                        <img className={classNames('card__image')} src={el.image} alt={el.title} />
                    </div>
                    <div className="card__title">
                        {el.title}
                    </div>
                    <div className="card__rating">Rating: {el.rating.rate} of 5</div>
                    <div className="card__price">Price: ${el.price}</div>
                    <div className="card__buy button">Add cart</div>
                </div>
            ) : <h1>Loading</h1>}
        </>
    );
};

export default Card;