import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shopNow.css";

function ShopNow() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilter = () => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterCategory) {
      filtered = filtered.filter(
        (product) => product.category === filterCategory
      );
    }

    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="all-products-page shopNow">
      <div className="banner">
        <h1>
          Welcome to <span>E-Shop</span>
        </h1>
        <p>Your one-stop destination for all categories of products</p>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={handleFilter}>Apply Filters</button>
      </div>

      <div className="product-grids">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-cards"
            onClick={() => handleProductClick(product.id)}
          >
            <div
              className="product-images"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p className="original-prices">
              ${(product.price * 1.2).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopNow;
