const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./UserController');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', UserController);

beforeAll(async () => {
    const url = 'mongodb://localhost/test';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com', password: '123456' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
    });

    it('should return all users', async () => {
        const res = await request(app)
            .get('/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a single user by ID', async () => {
        const user = await User.create({ name: 'Jane Doe', email: 'jane@example.com', password: '123456' });
        const res = await request(app)
            .get(`/users/${user._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Jane Doe');
    });

    it('should delete a user by ID', async () => {
        const user = await User.create({ name: 'Delete Me', email: 'delete@example.com', password: '123456' });
        const res = await request(app)
            .delete(`/users/${user._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toMatch(/User: Delete Me was deleted/);
    });

    it('should update a user by ID', async () => {
        const user = await User.create({ name: 'Update Me', email: 'update@example.com', password: '123456' });
        const res = await request(app)
            .put(`/users/${user._id}`)
            .send({ name: 'Updated Name' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Name');
    });
});