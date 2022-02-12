const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");
const adminData = require("./admin");

const router = express.Router();

// Root Route
router.get("/", (req, res, next) => {
  // with sendFile we are viewing the static html
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //with render we are using the templating engine
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Sercan's Shop" });
});

module.exports = router;
