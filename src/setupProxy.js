const { createProxyMiddleware } = require("http-proxy-middleware");
const corsConfig = require('./cors.js');

module.exports = function (app) {
  corsConfig(app);

  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://localhost:7021",
      changeOrigin: true,
    })
  );
};