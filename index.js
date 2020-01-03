const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
let fallback = require("express-history-api-fallback");
const mysql = require("mysql2/promise");

const { configRoutes } = require("./routes");

async function run() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(async (req, res, next) => {
    var connection = await mysql.createConnection({
      host: "awsteststeverds.cmairuw8fxgd.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password",
      database: "todo"
    });
    req.connection = connection;
    next();
  });
  configRoutes(app);
  app.use(async (req, res, next) => {
    await req.connection.destroy();
    next();
  });
  app.use("/", express.static(path.resolve(__dirname, "static")));

  app.listen(8081, null, () => {
    console.log("server is running on " + 8081);
  });
}

run();
