import React, { useState } from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

export const App = () => {
  return (
    <div>
      <Header onCartClick={() => console.log("showing cart")} />
      <ProductGrid onProductClick={(product) => console.log(product)} />
    </div>
  );
};
