import React from "react";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The lean startup Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Magni quo id dolore officia exercitationem ratione aperiam eos a
          facere eius pariatur, ab, aut labore impedit aspernatur consequatur
          tempora assumenda? Ad.
        </p>
        <p className="product__price">
          <small>£</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">⭐</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
