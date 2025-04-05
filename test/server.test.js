const request = require('supertest');
const app = require('../app');

describe('Server', () => {
  it('should listen on the correct port', (done) => {
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      expect(server.address().port).toBe(port);
      server.close();
      done();
    });
  });

  it('should respond with a 200 status', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});