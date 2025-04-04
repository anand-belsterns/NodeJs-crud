// db.test.js
const mongoose = require('mongoose');
const sinon = require('sinon');
const { expect } = require('chai');

// The function to connect to MongoDB
function connectToDatabase() {
    return mongoose.connect('mongodb://yourMongoDBURIGoesHere');
}

describe('Database Connection', function () {
    afterEach(function () {
        sinon.restore(); // Restore the original methods after each test
    });

    it('should connect to the database successfully', async function () {
        // Mock the mongoose.connect method
        const connectStub = sinon.stub(mongoose, 'connect').returns(Promise.resolve());

        // Call the function to connect to the database
        await connectToDatabase();

        // Check that mongoose.connect was called with the correct URI
        expect(connectStub.calledOnce).to.be.true;
        expect(connectStub.calledWith('mongodb://yourMongoDBURIGoesHere')).to.be.true;
    });

    it('should handle connection errors', async function () {
        // Mock the mongoose.connect method to simulate an error
        const connectStub = sinon.stub(mongoose, 'connect').returns(Promise.reject(new Error('Connection error')));

        try {
            await connectToDatabase();
        } catch (error) {
            expect(error).to.be.an('error');
            expect(error.message).to.equal('Connection error');
        }

        // Check that mongoose.connect was called
        expect(connectStub.calledOnce).to.be.true;
    });
});