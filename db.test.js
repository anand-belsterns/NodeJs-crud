const mongoose = require('mongoose');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

// This is the function we want to test
const connectToDatabase = async () => {
    const uri = 'mongodb://yourMongoDBURIGoesHere'; // Use your actual MongoDB URI
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

describe('Database Connection', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original function after each test
    });

    it('should connect to the database successfully', async () => {
        const connectStub = sinon.stub(mongoose, 'connect').resolves();
        
        await connectToDatabase();
        
        expect(connectStub.calledOnce).to.be.true; // Check if connect was called once
        expect(connectStub.firstCall.args[0]).to.equal('mongodb://yourMongoDBURIGoesHere'); // Verify the URI
    });

    it('should throw an error if connection fails', async () => {
        const connectStub = sinon.stub(mongoose, 'connect').rejects(new Error('Connection error'));
        
        try {
            await connectToDatabase();
            // If we reach this line, then the test should fail
            expect.fail('Expected method to throw.');
        } catch (error) {
            expect(error.message).to.equal('Connection error'); // Verify the error message
        }
    });
});