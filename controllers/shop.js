const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  // with sendFile we are viewing the static html
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //with render we are using the templating engine
  //   const products = adminData.products;
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Sercan's Shop Products",
      path: "products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Sercan's Shop",
      path: "shopping",
    });
  });
};

exports.getCart = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Your Cart",
      path: "cart",
    });
  });
};

exports.getCheckout = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/checkout", {
      prods: products,
      pageTitle: "Checkout",
      path: "cart",
    });
  });
};
