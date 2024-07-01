const Product = require("../../models/products.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const products = await Product.find({
    deleted: false,
  });

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Trang quan li san pham",
    products: products,
  });
};
