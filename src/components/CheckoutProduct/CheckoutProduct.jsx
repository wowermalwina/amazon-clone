import React from "react";
import "./CheckoutProduct.scss";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div classname="checkoutProduct__info">
        <p className="checkoutProduct__info__title">{title}</p>
        <p className="checkoutProduct__info__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__info__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
