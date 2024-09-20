import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const images = [
  "url(https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-sm.png)",
  "url(https://live-production.wcms.abc-cdn.net.au/4c800ea35284fb60d31a965a3f19c62e?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485)",
  "url(https://cdn.shopify.com/s/files/1/0070/7032/files/how_20to_20start_20a_20clothing_20brand.png?v=1693935729)",
];

function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const handleShopNow = () => {
    navigate("/shopNow");
  };

  return (
    <header
      className="header"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="text-content">
        <h1>
          Get <span>30%</span> off on
        </h1>
        <h2 className="typing-animation">
          New <span>Arrivals</span>
        </h2>
        <br />
        <button className="shop-button" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>
      <div className="arrows">
        <button className="arrow left-arrow" onClick={prevImage}>
          &lt;
        </button>
        <button className="arrow right-arrow" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </header>
  );
}

export default Header;
