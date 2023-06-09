import products from "./mocks/products";
import { ProductsCollection } from "../../imports/api/products/productsCollection";
import { CartsCollection } from "../../imports/api/cart/cartsCollection";

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
}

export default loadMockData;
