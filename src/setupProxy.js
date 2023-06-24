const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require('cors');

module.exports = function (app) {

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));

  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://sanejaapi.azurewebsites.net",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  );
};
