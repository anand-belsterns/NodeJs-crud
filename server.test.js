const request = require('supertest');
const app = require('./app');

describe('Server', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, () => {
      console.log('Test server listening on port 3000');
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should respond with 200 on GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });
});