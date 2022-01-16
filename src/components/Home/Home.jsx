import React from "react";
import "./Home.scss";
import homeImage from "../../assets/images/amazon_background.jpg";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeImage} alt="home image" />
      </div>
      <div className="home__row">
        <Product />
        <Product />
      </div>
      <div className="home__row"></div>
    </div>
  );
};

export default Home;
