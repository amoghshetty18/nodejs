const rootDir = require("../util/path");

const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In another middleware");
  // res.send(
  //   "<html><head><title>Home Page</title></head><body><h1>hello from express.</h1><a href='/admin/add-product'>Add Product</a></body></html>"
  // );
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
