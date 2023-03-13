import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { CartsCollection } from "./cartsCollection";

Meteor.methods({
  "cart.add.product"(userId, product) {
    check(userId, Number);
    check(product, Object);

    // Get the user's cart or create it
    var cart = CartsCollection.findOne({ userId: userId });
    if (!cart) {
      cart = { userId: userId, products: [] };
      CartsCollection.insert(cart);
    }

    // Check if the cart already has the same product in order to update quantity
    var existingProduct = cart.products.find((p) => p._id === product._id);
    if (existingProduct) {
      CartsCollection.update(
        { _id: cart._id, "products._id": product._id },
        { $inc: { "products.$.quantity": product.quantity } }
      );
    } else {
      CartsCollection.update(cart._id, { $push: { products: product } });
    }
  },
});
