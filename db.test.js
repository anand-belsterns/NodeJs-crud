// Jest test case starts here
const mongoose = require('mongoose');

jest.mock('mongoose', () => ({
    connect: jest.fn(),
}));

describe('Database Connection', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://yourMongoDBURIGoesHere');
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should call mongoose.connect with the correct URI', () => {
        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere');
    });

    it('should call mongoose.connect only once', () => {
        expect(mongoose.connect).toHaveBeenCalledTimes(1);
    });
});
// Jest test case ends here