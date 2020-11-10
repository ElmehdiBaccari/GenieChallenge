const genie = require('./genie/genie.service.js');

module.exports = function (app) {
  app.configure(genie);
};
