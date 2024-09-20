import React from "react";
import "./cart.css";
import { useCart } from "../context/cartContext";

function CartPage() {
  const { cart } = useCart();

  console.log("Cart items in CartPage:", cart);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
