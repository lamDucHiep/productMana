const dashBoardRoute = require("./dashboard.route");
const productsRoute = require("./product.route");

module.exports.index = (app) => {
  app.use("/admin/dashboard", dashBoardRoute);
  app.use("/admin/products", productsRoute);
};
