import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return product ? (
    <div id="details">
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <h2 className="pul">{product.price}$</h2>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
