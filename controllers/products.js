const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "addition",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // with sendFile we are viewing the static html
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //with render we are using the templating engine
  //   const products = adminData.products;
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Sercan's Shop",
      path: "shopping",
    });
  });
};
