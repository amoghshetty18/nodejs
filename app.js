const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", "views");

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);

// 'get' and 'post' make exact matches
// 'use' will match undefined routes with "/" route

/*
const fs = require("fs");

fs.writeFileSync(
  "helloAmogh.txt",
  "I am Amogh Shetty from K.L.E Technological University."
);
*/
