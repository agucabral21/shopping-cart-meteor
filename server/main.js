import { Meteor } from "meteor/meteor";
import products from "../imports/mocks/products";
import { ProductsCollection } from "../imports/api/products/productsCollection";
import "../imports/api/products/server/publications";

async function insertProduct(product) {
  await ProductsCollection.insertAsync(product);
}

async function loadMockData() {
  if ((await ProductsCollection.find().countAsync()) === 0) {
    for (const product of products) {
      await insertProduct(product);
    }
  }
}

Meteor.startup(async () => {
  await loadMockData();
});
