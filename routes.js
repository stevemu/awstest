const os = require("os");

function configRoutes(app) {
  // risk: if server is shutdown, the lastTextMessageDateCreatedTime is not updated when a sms comes in
  app.get("/host", async (req, res) => {
    return res.json({ message: "hello from " + os.hostname() });
  });

  app.get("/todos", async (req, res) => {
    let result = await req.connection.query("SELECT * from todo_t");
    return res.json(result[0]);
  });
}

exports.configRoutes = configRoutes;
