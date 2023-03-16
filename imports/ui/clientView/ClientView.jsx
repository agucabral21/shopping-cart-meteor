import React, { useState } from "react";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { CartsCollection } from "../../api/cart/cartsCollection";
import { Loading } from "../common/Loading";
import { CartModal } from "./cartModal/CartModal";
import Header from "./header/Header";
import ProductGrid from "./productGrid/ProductGrid";

export const ClientView = () => {
  const { loggedUser } = useLoggedUser();
  const userId = loggedUser.emails[0].address;
  const [showCartModal, setShowCartModal] = useState(false);
  const cartLoading = useSubscribe("userCart", userId);
  const userCart = useFind(() => CartsCollection.find());

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
    Meteor.call(
      "cart.add.product",
      userId,
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
  };

  return (
    <div>
      <Header onCartClick={showCart} cartProductsCount={cartProductsCount} />
      <ProductGrid onAddProduct={addProductToCart} />
      <CartModal
        userCart={userCart[0]}
        open={showCartModal}
        closeModal={closeCart}
      />
    </div>
  );
};
