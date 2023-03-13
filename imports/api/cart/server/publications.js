import { Meteor } from "meteor/meteor";
import { CartsCollection } from "../cartCollection";

Meteor.publish("userCart", function publishUserCart(userId) {
  return CartsCollection.find({ userId });
});
