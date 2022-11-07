const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://sanejaapi.azurewebsites.net",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
