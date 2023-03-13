import React from "react";
import { ClientView } from "./ClientView";
import "../api/cart/cartsMethods";

import "../../imports/api/products/productsMethods";

export const App = () => {
  return (
    <div>
      <ClientView />
    </div>
  );
};
