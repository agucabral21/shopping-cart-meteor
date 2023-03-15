import { check } from "meteor/check";
import { ProductsCollection } from "./productsCollection";

export const updateStock = (productId, quantity) => {
  check(productId, String);
  check(quantity, Number);

  var product = ProductsCollection.findOne({ _id: productId });
  if (!product) {
    return null;
  }

  ProductsCollection.update(product._id, {
    $inc: { stock: quantity },
  });
};

export const findById = (productId) => {
  check(productId, String);

  var product = ProductsCollection.findOne({ _id: productId });
  if (!product) {
    return null;
  }

  return product;
};
