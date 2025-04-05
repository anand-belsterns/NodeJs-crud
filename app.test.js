const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  it('should respond with a 200 status for GET /users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });

  it('should respond with a 404 status for non-existing routes', async () => {
    const response = await request(app).get('/non-existing');
    expect(response.status).toBe(404);
  });
});