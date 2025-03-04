import React, { useState } from "react";
import { getProducts } from "../api/products";
import ButtonWhatsApp from "../components/ButtonWhatsApp";

const Home = () => {
  const [products] = useState(getProducts());

  return (
    <div className="home">
      <h1>Summertime Charms</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <ButtonWhatsApp product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
