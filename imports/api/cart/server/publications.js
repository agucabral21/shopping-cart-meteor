import { Meteor } from "meteor/meteor";
import { CartsCollection } from "../cartsCollection";

Meteor.publish("userCart", function publishUserCart(userId) {
  //Get the user's cart or create one for the user.
  var cart = CartsCollection.findOne({ userId: userId });
  if (!cart) {
    cart = { userId: userId, products: [] };
    CartsCollection.insert(cart);
  }
  return CartsCollection.find({ userId });
});
