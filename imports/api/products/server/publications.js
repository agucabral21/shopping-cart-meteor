import { Meteor } from "meteor/meteor";
import { ProductsCollection } from "../products";

Meteor.publish("allProducts", function publishAllProducts() {
  return ProductsCollection.find();
});
