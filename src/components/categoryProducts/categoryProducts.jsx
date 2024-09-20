import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./categoryProducts.css";

function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=20`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="category-products-section">
      <h2>Products in {category}</h2>
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

export default CategoryProducts;
