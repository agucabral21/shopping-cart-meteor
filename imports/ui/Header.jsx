import React from "react";

export default Header = ({ cartItems, onCartClick }) => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      <button
        onClick={onCartClick}
        className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        {cartItems ?? 0} items in your Cart
      </button>
    </header>
  );
};
