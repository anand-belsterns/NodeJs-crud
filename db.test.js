// db.test.js
const mongoose = require('mongoose');
const connectToDatabase = require('./db');

jest.mock('mongoose');

describe('connectToDatabase', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should connect to the database successfully', async () => {
        mongoose.connect.mockResolvedValueOnce(); // Mock successful connection
        
        await expect(connectToDatabase()).resolves.toBeUndefined(); // Expect no errors
        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere', { useNewUrlParser: true, useUnifiedTopology: true });
    });

    it('should throw an error when connection fails', async () => {
        const error = new Error('Connection failed');
        mongoose.connect.mockRejectedValueOnce(error); // Mock connection failure
        
        await expect(connectToDatabase()).rejects.toThrow('Connection failed'); // Expect error to be thrown
    });
});