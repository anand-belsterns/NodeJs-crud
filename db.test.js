// db.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const { connectToDatabase } = require('./db');

describe('Database Connection', () => {
    let connectStub;

    beforeEach(() => {
        // Stub the mongoose.connect method
        connectStub = sinon.stub(mongoose, 'connect');
    });

    afterEach(() => {
        // Restore the original method
        connectStub.restore();
    });

    it('should call mongoose.connect with the correct URI', async () => {
        const testURI = 'mongodb://yourMongoDBURIGoesHere';
        
        // Call the connectToDatabase function
        await connectToDatabase(testURI);
        
        // Check if mongoose.connect was called with the correct URI
        expect(connectStub.calledOnce).to.be.true;
        expect(connectStub.firstCall.args[0]).to.equal(testURI);
    });

    it('should handle connection errors', async () => {
        const testURI = 'mongodb://yourMongoDBURIGoesHere';
        const errorMessage = 'Connection Error';

        // Simulate an error when connecting
        connectStub.returns(Promise.reject(new Error(errorMessage)));
        
        // Expect the connection to throw an error
        await expect(connectToDatabase(testURI)).to.be.rejectedWith(Error, errorMessage);
    });
});