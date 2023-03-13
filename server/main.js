import { Meteor } from "meteor/meteor";
import products from "../imports/mocks/products";
import { ProductsCollection } from "../imports/api/products/productsCollection";
import { CartsCollection } from "../imports/api/cart/cartCollection";

import "../imports/api/products/server/publications";
import "../imports/api/cart/server/publications";
import "../imports/api/cart/cartMethods";

async function insertProduct(product) {
  await ProductsCollection.insertAsync(product);
}

async function insertCart(cart) {
  await CartsCollection.insertAsync(cart);
}

async function loadMockData() {
  if ((await ProductsCollection.find().countAsync()) === 0) {
    for (const product of products) {
      await insertProduct(product);
    }
  }
  if ((await CartsCollection.find().countAsync()) === 0) {
    await insertCart({ userId: 1, products: [] });
  }
}

Meteor.startup(async () => {
  await loadMockData();
});
