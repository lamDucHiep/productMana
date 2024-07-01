const dashBoardRoute = require("./dashboard.route");
const productsRoute = require("./product.route");

const systemConfig = require("../../config/system");

module.exports.index = (app) => {
  const path = `/${systemConfig.prefixAdmin}`;
  app.use(`${path}/dashboard`, dashBoardRoute);
  app.use(`${path}/products`, productsRoute);
};
