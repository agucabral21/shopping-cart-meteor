import { Meteor } from "meteor/meteor";

import loadMockData from "./utils/mockLoader";

import "../imports/api/products/server/publications";
import "../imports/api/cart/server/publications";
import "../imports/api/cart/cartsMethods";

Meteor.startup(async () => {
  await loadMockData();
});
