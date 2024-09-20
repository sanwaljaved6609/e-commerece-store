import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "./productDetail.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      console.log("Adding to cart:", { product, quantity });
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="original-price">
          Original Price: ${(product.price * 1.5).toFixed(2)}
        </p>
        <div className="quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className="action-buttons">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
