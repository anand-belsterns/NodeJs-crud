const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./UserController');
const User = require('./User');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/users', UserController);

jest.mock('./User');

describe('User API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/users - creates a new user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
    User.create.mockImplementation((user, callback) => callback(null, user));

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(newUser);
  });

  test('GET /api/users - returns all users', async () => {
    const users = [{ name: 'John Doe' }, { name: 'Jane Doe' }];
    User.find.mockImplementation((query, callback) => callback(null, users));

    const response = await request(app)
      .get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
  });

  test('GET /api/users/:id - gets a single user', async () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    User.findById.mockImplementation((id, callback) => callback(null, user));

    const response = await request(app)
      .get('/api/users/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(user);
  });

  test('DELETE /api/users/:id - deletes a user', async () => {
    const user = { name: 'John Doe', _id: '1' };
    User.findByIdAndRemove.mockImplementation((id, callback) => callback(null, user));

    const response = await request(app)
      .delete('/api/users/1');

    expect(response.status).toBe(200);
    expect(response.text).toBe('User: John Doe was deleted.');
  });

  test('PUT /api/users/:id - updates a user', async () => {
    const updatedUser = { name: 'John Smith' };
    User.findByIdAndUpdate.mockImplementation((id, data, options, callback) => callback(null, { ...updatedUser, _id: id }));

    const response = await request(app)
      .put('/api/users/1')
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ...updatedUser, _id: '1' });
  });
});