//const homeRoute = require("./home.route");
const dashBoardRoute = require("./dashboard.route");

module.exports.index = (app) => {
  app.use("/admin/dashboard", dashBoardRoute);
};
