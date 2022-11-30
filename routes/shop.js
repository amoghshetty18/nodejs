const rootDir = require("../util/path");

const path = require("path");

const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const { products } = adminData;
  console.log(products);
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    css: ["product", "forms"],
    path: "/",
  });
});

module.exports = router;
