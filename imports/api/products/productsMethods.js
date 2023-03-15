import { Meteor } from "meteor/meteor";
import ProductService from "./productService";

Meteor.methods({
  "product.extract.stock"(productId, quantity) {
    ProductService.updateStock(productId, -quantity);
  },
});
