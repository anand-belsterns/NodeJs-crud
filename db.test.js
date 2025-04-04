// db.test.js
const mongoose = require('mongoose');
jest.mock('mongoose'); // Mock the mongoose module

describe('Database Connection', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any previous mock calls
    });

    it('should connect to the database successfully', async () => {
        // Arrange
        mongoose.connect.mockImplementation(() => Promise.resolve());

        // Act
        await require('./db'); // Importing db.js will trigger the connection

        // Assert
        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere', { useNewUrlParser: true, useUnifiedTopology: true });
        expect(console.log).toHaveBeenCalledWith("Database connection successful");
    });

    it('should handle connection error', async () => {
        // Arrange
        const error = new Error('Connection failed');
        mongoose.connect.mockImplementation(() => Promise.reject(error));
        console.error = jest.fn(); // Mocking console.error

        // Act
        await require('./db'); // Importing db.js will trigger the connection

        // Assert
        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere', { useNewUrlParser: true, useUnifiedTopology: true });
        expect(console.error).toHaveBeenCalledWith("Database connection error", error);
    });
});