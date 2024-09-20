import React from "react";
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../context/authContext";
import swal from "sweetalert";

function Navbar() {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        logout();
        swal("Logged out!", "You have been logged out.", "success");
      } else {
        swal("Cancelled", "You are still logged in.", "info");
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">MS Shop</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sales">Sales</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
      </div>

      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          <FaCartShopping />
        </a>
        {currentUser ? (
          <>
            <a href="/profile" className="profile-icon">
              <img
                src={currentUser.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="profile-img"
              />
            </a>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/login" className="login-button">
              Login
            </a>
            <a href="/register" className="register-button">
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
