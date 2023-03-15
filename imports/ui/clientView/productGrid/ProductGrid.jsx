import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Loading } from "../../common/Loading";

import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { ProductsCollection } from "../../../api/products/productsCollection";
import ProductOverview from "./ProductOverview";

const ProductGrid = ({ onAddProduct }) => {
  const isLoading = useSubscribe("products");
  const products = useFind(() => ProductsCollection.find({}));

  const [showProductOverview, setShowProductOverview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);

  const openProductOverview = (product) => {
    setShowProductOverview(true);
    setSelectedProduct(product);
  };
  const onCloseProductOverview = () => {
    setShowProductOverview(false);
  };

  if (isLoading()) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product["_id"]}
              product={product}
              showProduct={openProductOverview}
            />
          ))}
        </div>
      </div>
      <ProductOverview
        show={showProductOverview}
        product={selectedProduct}
        onCloseProductOverview={onCloseProductOverview}
        addToCart={onAddProduct}
      />
    </div>
  );
};

export default ProductGrid;
