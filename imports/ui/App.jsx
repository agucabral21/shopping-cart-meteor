import React, { useState } from "react";
import ProductGrid from "./ProductGrid";

export const App = () => {
  return (
    <div>
      <ProductGrid onProductClick={(product) => console.log(product)} />
    </div>
  );
};
