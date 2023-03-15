import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "../api/cart/cartsMethods";
import "../api/products/productsMethods";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
