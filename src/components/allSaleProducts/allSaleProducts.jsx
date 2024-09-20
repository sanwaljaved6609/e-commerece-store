import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./allSaleProducts.css";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="all-products-section">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="products-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div
              className="products-image"
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
    </section>
  );
}

export default AllProducts;
