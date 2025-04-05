const request = require('supertest');
const app = require('../app');

describe('UserController', () => {
  it('should respond with a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
  });

  it('should return a user by ID', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });
});