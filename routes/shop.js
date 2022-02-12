const path = require("path");

const express = require("express");

// const rootDir = require("../helpers/path");
// const adminData = require("./admin");

const productController = require("../controllers/products");

const router = express.Router();

// Root Route
router.get("/", productController.getProducts);

module.exports = router;
