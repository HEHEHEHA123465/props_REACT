import React, { useState } from "react";

const Product = ({ name, price, image, onOrder }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <div className="quantity-controls">
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={() => onOrder(price * quantity)}>Order Now</button>
    </div>
  );
};

export default Product;
