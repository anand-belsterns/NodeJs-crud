// db.test.js
const mongoose = require('mongoose');
const connectToDatabase = require('./db');

jest.mock('mongoose');

describe('Database Connection', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should connect to the database successfully', async () => {
        mongoose.connect.mockResolvedValueOnce();
        
        await connectToDatabase();

        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    it('should log an error when connecting fails', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        const mockError = new Error('Connection failed');

        mongoose.connect.mockRejectedValueOnce(mockError);
        
        await connectToDatabase();

        expect(consoleSpy).toHaveBeenCalledWith('Database connection error:', mockError);
        consoleSpy.mockRestore();
    });
});