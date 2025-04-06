const request = require('supertest');
const app = require('./app');

describe('Server', () => {
  let server;
  const port = 3000;

  beforeAll(done => {
    server = app.listen(port, () => {
      console.log('Express server listening on port ' + port);
      done();
    });
  });

  afterAll(done => {
    server.close(done);
  });

  test('should respond with 200 status', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});