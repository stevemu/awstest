const os = require("os");

function configRoutes(app) {
  // risk: if server is shutdown, the lastTextMessageDateCreatedTime is not updated when a sms comes in
  app.get("/host", async (req, res) => {
    return res.json({ message: "hello from " + os.hostname() });
  });
}

exports.configRoutes = configRoutes;
