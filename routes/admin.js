const path = require("path");

const rootDir = require("../util/path");
const express = require("express");

const router = express.Router();

//  /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("./hbs/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
});

const products = [];

//  /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = {
  routes: router,
  products: products,
};
