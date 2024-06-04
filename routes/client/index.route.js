const homeRoute = require("./home.route");
const productsRoute = require("./product.route");

module.exports.index = (app) => {
  app.use("/", homeRoute);
  app.use("/products", productsRoute);
};
