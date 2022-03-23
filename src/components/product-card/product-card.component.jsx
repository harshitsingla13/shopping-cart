import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import "./product-card.styles.css";
import { updateCart } from "../../redux/action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(updateCart(product));
  }, [dispatch, product]);

  return (
    <div className="product-cards" id={product.category}>
      <h2 className="product-name truncate">{product.name}</h2>
      <img src={product.imageURL} alt={product.name} className="product-img" />
      {/*<div className="product-description-container">*/}
      <p className="product-desc">{product.description}</p>
      <button className="btn-cta mobile tablet" onClick={handleClick}>
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button onClick={handleClick} className="btn-cta">
          Buy Now
        </button>
      </div>
      {/*</div>*/}
    </div>
  );
};

export default ProductCard;
