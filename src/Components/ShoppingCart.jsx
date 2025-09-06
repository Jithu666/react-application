import React from "react";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const addCartItem = () => {
    setCartCount(cartCount + 1);
  };

  const removeCartItem = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const clearCart = () => {
    if (cartCount > 0) {
      setCartCount(0);
    }
  };

  const getCartMessage = () => {
    if (cartCount === 0) return "Your cart is Empty";
    if (cartCount >= 1)
      return "You have Items in your cart, Proceed to checkout.";
    return;
    `youchave ${cartCount} items in your cart.`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shopping Cart</h1>
      <p>{getCartMessage()}</p>

      <button onClick={addCartItem}>+</button>
      <button onClick={removeCartItem} disabled={cartCount === 0}>
        -
      </button>
      <button onClick={clearCart}>X</button>
    </div>
  );
};

export default ShoppingCart;
