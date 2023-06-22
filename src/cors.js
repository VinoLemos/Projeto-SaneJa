const cors = require('cors');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

module.exports = function (app) {
  app.use(cors(corsOptions));
};