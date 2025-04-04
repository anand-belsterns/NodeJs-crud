// db.test.js
const mongoose = require('mongoose');
const db = require('./db'); // Adjust the path as necessary

jest.mock('mongoose');

describe('Database Connection', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('should connect to the MongoDB database', async () => {
        // Arrange
        const mockConnect = jest.fn().mockResolvedValueOnce(true); // Mock resolved connection
        mongoose.connect = mockConnect;

        // Act
        await db; // Importing the db will execute the connection

        // Assert
        expect(mockConnect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere');
        expect(mockConnect).toHaveBeenCalledTimes(1);
    });

    it('should handle connection errors', async () => {
        // Arrange
        const mockConnect = jest.fn().mockRejectedValueOnce(new Error('Connection error'));
        mongoose.connect = mockConnect;

        // Act & Assert
        await expect(db).rejects.toThrow('Connection error');
        expect(mockConnect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere');
    });
});