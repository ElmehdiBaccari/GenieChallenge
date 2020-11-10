const assert = require('assert');
const app = require('../../src/app');

describe('\'genie\' service', () => {
  it('registered the service', () => {
    const service = app.service('genie');

    assert.ok(service, 'Registered the service');
  });
});
