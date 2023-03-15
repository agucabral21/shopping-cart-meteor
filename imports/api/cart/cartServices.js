import { check } from "meteor/check";
import { CartsCollection } from "./cartsCollection";

export const updateProductQuantity = (userId, product, quantity) => {
  check(userId, String);
  check(product, Object);
  check(quantity, Number);

  // Get the user's cart or create it
  var cart = CartsCollection.findOne({ userId: userId });
  if (!cart) {
    cart = { userId: userId, products: [] };
    CartsCollection.insert(cart);
  }

  // Check if the cart already has the same product in order to update quantity
  var existingProduct = cart.products.find((p) => p._id === product._id);
  if (existingProduct) {
    if (existingProduct.quantity + quantity <= 0) {
      //Remove Product
      const a = CartsCollection.update(
        { _id: cart._id },
        { $pull: { products: { _id: product._id } } }
      );

      var cart = CartsCollection.findOne({ userId: userId });
    } else {
      //Update Product Quantity
      CartsCollection.update(
        { _id: cart._id, "products._id": product._id },
        { $inc: { "products.$.quantity": quantity } }
      );
    }
  } else {
    //addProduct to cart
    CartsCollection.update(cart._id, {
      $push: { products: { ...product, quantity } },
    });
  }
};
