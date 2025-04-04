// Jest test case starts here
const express = require('express');
const request = require('supertest');
const bodyParser = require('body-parser');
const userRouter = require('./path/to/your/router'); // Adjust to the actual path of your router
const User = require('./User');

jest.mock('./User');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRouter);

describe('User API', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new user', async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
        User.create.mockImplementation((userData, callback) => callback(null, newUser));

        const response = await request(app)
            .post('/users')
            .send(newUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(newUser);
        expect(User.create).toHaveBeenCalledWith(newUser, expect.any(Function));
    });

    it('should return all users', async () => {
        const users = [{ name: 'John Doe', email: 'john@example.com' }];
        User.find.mockImplementation((query, callback) => callback(null, users));

        const response = await request(app)
            .get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(users);
        expect(User.find).toHaveBeenCalledWith({}, expect.any(Function));
    });

    it('should return a single user', async () => {
        const user = { name: 'John Doe', email: 'john@example.com' };
        User.findById.mockImplementation((id, callback) => callback(null, user));

        const response = await request(app)
            .get('/users/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(user);
        expect(User.findById).toHaveBeenCalledWith('1', expect.any(Function));
    });

    it('should delete a user', async () => {
        const user = { name: 'John Doe' };
        User.findByIdAndRemove.mockImplementation((id, callback) => callback(null, user));

        const response = await request(app)
            .delete('/users/1');

        expect(response.status).toBe(200);
        expect(response.text).toBe('User: John Doe was deleted.');
        expect(User.findByIdAndRemove).toHaveBeenCalledWith('1', expect.any(Function));
    });

    it('should update a user', async () => {
        const updatedUser = { name: 'John Doe', email: 'john@example.com' };
        User.findByIdAndUpdate.mockImplementation((id, userData, options, callback) => callback(null, updatedUser));

        const response = await request(app)
            .put('/users/1')
            .send(updatedUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedUser);
        expect(User.findByIdAndUpdate).toHaveBeenCalledWith('1', updatedUser, { new: true }, expect.any(Function));
    });
});
// Jest test case ends here