// db.test.js
const mongoose = require('mongoose');
const connectDB = require('./db');

jest.mock('mongoose');

describe('Database Connection', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should connect to MongoDB successfully', async () => {
        // Mock the mongoose.connect function to resolve successfully
        mongoose.connect.mockResolvedValueOnce();

        await expect(connectDB()).resolves.toBeUndefined();

        // Verify that mongoose.connect was called with the correct URI and options
        expect(mongoose.connect).toHaveBeenCalledWith(
            'mongodb://yourMongoDBURIGoesHere',
            expect.objectContaining({
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        );
    });

    it('should throw an error if MongoDB connection fails', async () => {
        // Mock the mongoose.connect function to reject with an error
        const errorMessage = 'Connection error';
        mongoose.connect.mockRejectedValueOnce(new Error(errorMessage));

        await expect(connectDB()).rejects.toThrow(errorMessage);

        // Verify that mongoose.connect was called
        expect(mongoose.connect).toHaveBeenCalled();
    });
});