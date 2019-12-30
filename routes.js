function configRoutes(app) {
  // risk: if server is shutdown, the lastTextMessageDateCreatedTime is not updated when a sms comes in
  app.get("/", async (req, res) => {
    return res.json({ message: "hello" });
  });
}

exports.configRoutes = configRoutes;
