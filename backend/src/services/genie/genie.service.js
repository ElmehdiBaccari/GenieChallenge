
const { genie } = require('./genie.class');
const createModel = require('../../models/genie.model');
const hooks = require('./genie.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

 
  app.use('/genie', new genie(options, app));

 
  const service = app.service('genie');

  service.hooks(hooks);
};
