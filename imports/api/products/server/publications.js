import { Meteor } from "meteor/meteor";
import { ProductsCollection } from "../productsCollection";

Meteor.publish("products", function publishAllProducts() {
  return ProductsCollection.find();
});
