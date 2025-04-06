const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./UserController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', UserController);

describe('User API', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com', password: '123456' });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
  });

  it('should return all users', async () => {
    const response = await request(app)
      .get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a single user', async () => {
    const user = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com', password: '123456' });
    const response = await request(app)
      .get(`/users/${user.body._id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
  });

  it('should delete a user', async () => {
    const user = await request(app)
      .post('/users')
      .send({ name: 'Jane Doe', email: 'jane@example.com', password: '123456' });
    const response = await request(app)
      .delete(`/users/${user.body._id}`);
    expect(response.status).toBe(200);
    expect(response.text).toContain('User: Jane Doe was deleted.');
  });

  it('should update a user', async () => {
    const user = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com', password: '123456' });
    const response = await request(app)
      .put(`/users/${user.body._id}`)
      .send({ name: 'John Smith' });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Smith');
  });
});