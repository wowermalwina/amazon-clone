import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

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
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{" "}
      </div>
    </div>
  );
};

export default CheckoutProduct;
