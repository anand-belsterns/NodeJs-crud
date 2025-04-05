const request = require('supertest');
const app = require('../app');
const UserController = require('../user/UserController');

describe('UserController', () => {
  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await request(app).get('/users');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = { name: 'John Doe', email: 'john@example.com' };
      const response = await request(app).post('/users').send(newUser);
      expect(response.status).toBe(201);
      expect(response.body.name).toBe(newUser.name);
    });
  });

  describe('GET /users/:id', () => {
    it('should return a user by ID', async () => {
      const userId = 1;
      const response = await request(app).get(`/users/${userId}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(userId);
    });
  });

  describe('PUT /users/:id', () => {
    it('should update a user by ID', async () => {
      const userId = 1;
      const updatedUser = { name: 'Jane Doe' };
      const response = await request(app).put(`/users/${userId}`).send(updatedUser);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updatedUser.name);
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user by ID', async () => {
      const userId = 1;
      const response = await request(app).delete(`/users/${userId}`);
      expect(response.status).toBe(204);
    });
  });
});