const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);
console.log(routes.someText);
server.listen(3000);

/*
const fs = require("fs");

fs.writeFileSync(
  "helloAmogh.txt",
  "I am Amogh Shetty from K.L.E Technological University."
);
*/
