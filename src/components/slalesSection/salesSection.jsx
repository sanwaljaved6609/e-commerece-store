import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./salesSection.css";

function SaleSection() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleSeeAllClick = () => {
    navigate("/all-products");
  };

  return (
    <section className="sale-section">
      <h2>Flash Sale</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <h3>{product.title}</h3>
            <p className="sale-price">${product.price.toFixed(2)}</p>
            <p className="original-price">
              ${(product.price * 1.5).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <button className="see-all-button" onClick={handleSeeAllClick}>
        See All Products
      </button>
    </section>
  );
}

export default SaleSection;
