const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
let fallback = require("express-history-api-fallback");

const { configRoutes } = require("./routes");

async function run() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  configRoutes(app);

  app.use("/", express.static(path.resolve(__dirname, "static")));

  app.listen(5000, null, () => {
    console.log("server is running on " + 5000);
  });
}

run();
