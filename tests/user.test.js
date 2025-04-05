const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('creates a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});