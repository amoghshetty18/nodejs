const path = require("path");

const rootDir = require("../util/path");
const express = require("express");

const router = express.Router();

//  /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  // );
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
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
