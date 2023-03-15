import React, { useState } from "react";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { CartsCollection } from "../api/cart/cartsCollection";
import { Loading } from "./components/Loading";
import { CartModal } from "./CartModal";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

export const ClientView = () => {
  const { loggedUser } = useLoggedUser();

  const userId = loggedUser.emails[0].address;
  console.log(userId);
  const cartLoading = useSubscribe("userCart", userId);
  const userCart = useFind(() => CartsCollection.find());
  const [showCartModal, setShowCartModal] = useState(false);

  if (cartLoading()) {
    return <Loading />;
  }

  const cartProductsCount = userCart[0].products.reduce(
    (accumulator, product) => {
      return accumulator + product.quantity;
    },
    0
  );

  const showCart = () => {
    setShowCartModal(true);
  };
  const closeCart = () => {
    setShowCartModal(false);
  };

  const addProductToCart = (product) => {
    Meteor.call("cart.add.product", userId, product, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        Meteor.call(
          "product.extract.stock",
          product._id,
          product.quantity,
          (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  };

  return (
    <div>
      <Header onCartClick={showCart} cartProductsCount={cartProductsCount} />
      <ProductGrid onAddProduct={addProductToCart} />
      <CartModal
        open={showCartModal}
        closeModal={closeCart}
        products={userCart[0].products}
      />
    </div>
  );
};
