const request = require('supertest');
const app = require('../app');

describe('Server', () => {
  it('should listen on the specified port', (done) => {
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      expect(server.address().port).toBe(port);
      server.close();
      done();
    });
  });
});