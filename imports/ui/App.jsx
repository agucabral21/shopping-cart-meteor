import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "../api/cart/cartsMethods";
import "../api/products/productsMethods";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
