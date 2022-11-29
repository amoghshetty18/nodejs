const rootDir = require("../util/path");

const path = require("path");

const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const { products } = adminData;
  res.render("./hbs/shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
