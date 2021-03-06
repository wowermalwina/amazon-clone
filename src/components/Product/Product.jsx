import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.scss";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket =>", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    //dispatch is like a gun. It allows you to shot into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((star) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <div class="product__alert-content">Added</div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
