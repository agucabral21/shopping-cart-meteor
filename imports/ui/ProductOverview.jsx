import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ProductOverview = ({ show, closeModal, product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const quantityDesired = e.target.value;
    setQuantity(quantityDesired);
  };

  const handleAddToCart = () => {
    console.log("Adding Product to Cart");
    closeModal();
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
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
                  className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full"
                  onClick={closeModal}
                >
                  Back
                </button>
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-4 font-bold text-lg">${product.price}</p>
              <div className="mt-4 flex items-center">
                <label> {`Quantity (${product.stock} available)`} </label>
                alt={product.name}
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 px-2 py-1 border border-gray-400 rounded-md mx-2"
                />
                <button
                  onClick={handleAddToCart}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductOverview;
