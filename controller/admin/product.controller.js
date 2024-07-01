const Product = require("../../models/products.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Trang quan li san pham",
    products: products,
  });
};
