import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";

const ProductOverview = ({
  show,
  onCloseProductOverview,
  product,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (product.stock < quantity) {
      alert("Not enough stock");
      setQuantity(product.stock);
    } else {
      setQuantity((prevValue) => prevValue + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity((prevValue) => prevValue - 1);
  };

  const handleAddToCart = () => {
    if (product.stock < quantity) {
      alert("Not enough stock");
      setQuantity(1);
    } else {
      product.quantity = +quantity;
      addToCart(product);
      closeProductOverview();
    }
  };

  const closeProductOverview = () => {
    setQuantity(1);
    onCloseProductOverview();
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeProductOverview}
      >
        <div className="min-h-screen px-4 text-center">
          <div className="fixed inset-0 bg-black opacity-30" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="inline-block max-w-md w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full rounded-md mb-4"
                />
                <button
                  className="absolute top-2 right-2 bg-gray-200 p-1 "
                  onClick={closeProductOverview}
                >
                  <FaTimes> </FaTimes>
                </button>
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-4 font-bold text-lg">${product.price}</p>
              {product.stock > 0 ? (
                <div className="mt-4 flex items-center">
                  <label> {`(${product.stock} available)`} </label>

                  <div className="flex items-center justify-center mx-3">
                    <button
                      className="border border-gray-300 rounded-l px-2 py-1"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <input
                      className="border-t border-b border-gray-300 px-2 py-1 w-10 text-center"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="border border-gray-300 rounded-r px-2 py-1"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              ) : (
                <span className="bg-red-100 text-red-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Sold Out
                </span>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductOverview;
