import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

const placeholderImages = {
  electronics:
    "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
  jewelery:
    "https://dropinblog.net/34249196/files/featured/10-essential-jewellery-pieces.png",
  "men's clothing":
    "https://img.freepik.com/premium-photo/cool-fashion-casual-men-outfit-wooden-table_93675-18917.jpg",
  "women's clothing":
    "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
};

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoriesWithImages = data.map((category) => ({
          name: category,
          image: `url(${
            placeholderImages[category] ||
            "https://via.placeholder.com/200x150?text=Category"
          })`,
        }));
        setCategories(categoriesWithImages);
      });
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <section className="categories-section categories">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div
              className="category-image"
              style={{ backgroundImage: category.image }}
            ></div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
