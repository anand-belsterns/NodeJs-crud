const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./UserController');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRouter);

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'John Doe');
    });

    it('should return all users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a single user by ID', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'Jane Doe', email: 'jane@example.com', password: 'password123' });
        const res = await request(app).get(`/users/${user.body._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Jane Doe');
    });

    it('should delete a user by ID', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'Mark Smith', email: 'mark@example.com', password: 'password123' });
        const res = await request(app).delete(`/users/${user.body._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('User: Mark Smith was deleted.');
    });

    it('should update a user by ID', async () => {
        const user = await request(app)
            .post('/users')
            .send({ name: 'Alice Brown', email: 'alice@example.com', password: 'password123' });
        const res = await request(app)
            .put(`/users/${user.body._id}`)
            .send({ name: 'Alice Johnson' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Alice Johnson');
    });
});