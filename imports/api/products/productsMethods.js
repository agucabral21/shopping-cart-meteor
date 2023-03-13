import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ProductsCollection } from "./productsCollection";

Meteor.methods({
  "product.extract.stock"(productId, quantity) {
    check(productId, String);
    check(quantity, Number);

    // Get the user's cart or create it
    var product = ProductsCollection.findOne({ _id: productId });
    if (!product) {
      return null;
    }

    ProductsCollection.update(product._id, {
      $inc: { stock: -quantity },
    });
  },
});
