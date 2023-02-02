import React from "react";
import { Link } from "react-router-dom";

// import Showcase from "./Showcase";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div id="product">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <h4>{product.category}</h4>
      <h5>{product.price}</h5>
      <div className="flex">
        <p>{product.rating.rate}</p>
        <p>/</p>
        <p>{product.rating.count}</p>
      </div>
      <Link to={`/${product.id}`} className="details">
        Details
      </Link>
    </div>
  );
};

export default Product;
