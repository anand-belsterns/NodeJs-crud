const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../user/UserController');
const User = require('../user/User');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRouter);

describe('User API', () => {
    afterEach(async () => {
        await User.deleteMany({});
    });

    test('POST /users - create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.name).toBe('John Doe');
    });

    test('GET /users - returns all users', async () => {
        await User.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    test('GET /users/:id - gets a single user', async () => {
        const user = await User.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        const response = await request(app).get(`/users/${user._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('John Doe');
    });

    test('DELETE /users/:id - deletes a user', async () => {
        const user = await User.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        const response = await request(app).delete(`/users/${user._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('User: John Doe was deleted.');
    });

    test('PUT /users/:id - updates a user', async () => {
        const user = await User.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        const response = await request(app)
            .put(`/users/${user._id}`)
            .send({ name: 'Jane Doe' });
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Jane Doe');
    });
});