import { Meteor } from "meteor/meteor";
import CartsService from "./cartServices";
import ProductService from "../products/productService";

Meteor.methods({
  "cart.add.product"(userId, productId, quantity) {
    const product = ProductService.findById(productId);
    CartsService.updateProductQuantity(userId, product, quantity);
    ProductService.updateStock(productId, -quantity);
    return { success: "true" };
  },
  "cart.remove.product"(userId, productId, quantity) {
    const product = ProductService.findById(productId);
    CartsService.updateProductQuantity(userId, product, -quantity);
    ProductService.updateStock(productId, quantity);
    return { success: "true" };
  },
});
