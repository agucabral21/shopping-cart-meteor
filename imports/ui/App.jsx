import React, { useState } from "react";
import CartModal from "./CartModal";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

export const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [cart, setCart] = useState({ products: [] });

  const cartProductsCount = cart.products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);

  const showCart = () => {
    setShowCartModal(true);
  };
  const closeCart = () => {
    setShowCartModal(false);
  };

  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const updatedProducts = [...prevCart.products, product];
      return { ...prevCart, products: updatedProducts };
    });
  };
  return (
    <div>
      <Header onCartClick={showCart} cartProductsCount={cartProductsCount} />
      <ProductGrid onAddProduct={addProductToCart} />
      <CartModal
        open={showCartModal}
        closeModal={closeCart}
        products={cart.products}
      />
    </div>
  );
};
