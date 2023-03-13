import React from "react";

const ProductCard = ({ product, showProduct }) => {
  const showProductOverview = () => {
    showProduct(product);
  };

  return (
    <div>
      <a className="group" onClick={showProductOverview}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-lg text-black-700">{product.name}</h3>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="mt-1 text-base font-medium text-gray-900">
            ${product.price}
          </p>
          {product.stock === 0 ? (
            <span className="bg-red-100 text-red-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Sold Out
            </span>
          ) : (
            <span className="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              In stock : {product.stock}
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
