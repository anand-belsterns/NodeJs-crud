const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  it('should respond with a 200 status for the /users route', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  // Add other tests for different endpoints in UserController as needed
  // For example, if there's a POST /users endpoint
  it('should create a new user and respond with 201 status', async () => {
    const newUser = { name: 'John Doe', email: 'john.doe@example.com' };
    const response = await request(app).post('/users').send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id'); // Assuming the created user has an id
  });

  // You can add more tests for error handling and other routes
});