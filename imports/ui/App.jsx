import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "../api/cart/cartsMethods";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
