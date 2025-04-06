const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./UserController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', UserController);

jest.mock('./User');
const User = require('./User');

describe('User API', () => {
  it('should create a new user', async () => {
    User.create.mockImplementation((userData, callback) => callback(null, userData));
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
  });

  it('should return all users', async () => {
    User.find.mockImplementation((query, callback) => callback(null, [{ name: 'John Doe' }, { name: 'Jane Doe' }]));
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
  });

  it('should return a single user', async () => {
    User.findById.mockImplementation((id, callback) => callback(null, { name: 'John Doe' }));
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ name: 'John Doe' });
  });

  it('should delete a user', async () => {
    User.findByIdAndRemove.mockImplementation((id, callback) => callback(null, { name: 'John Doe' }));
    const response = await request(app).delete('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('User: John Doe was deleted.');
  });

  it('should update a user', async () => {
    User.findByIdAndUpdate.mockImplementation((id, userData, options, callback) => callback(null, { ...userData, name: 'Updated Name' }));
    const response = await request(app)
      .put('/users/1')
      .send({ name: 'Updated Name' });
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Updated Name');
  });
});