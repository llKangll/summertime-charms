import React from "react";

const ProductCard = ({ product, onImageClick }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={() => onImageClick(product.image)}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <span className="product-price">${product.price}</span>
    </div>
  );
};

export default ProductCard;
