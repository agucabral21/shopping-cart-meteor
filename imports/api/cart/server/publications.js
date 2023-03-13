import { Meteor } from "meteor/meteor";
import { CartsCollection } from "../cartsCollection";

Meteor.publish("userCart", function publishUserCart(userId) {
  return CartsCollection.find({ userId });
});
