const mongoose = require('mongoose');
const sinon = require('sinon');
const { expect } = require('chai');
const connectToDatabase = require('./db');

describe('Database Connection', () => {
    let connectStub;

    beforeEach(() => {
        // Stub the mongoose connect method before each test.
        connectStub = sinon.stub(mongoose, 'connect').callsFake((uri, options, callback) => {
            // Simulate successful connection
            callback(null);
        });
    });

    afterEach(() => {
        // Restore the original mongoose connect method after each test.
        connectStub.restore();
    });

    it('should connect to the database', async () => {
        const uri = 'mongodb://yourMongoDBURIGoesHere';
        
        // Call the function to connect to the database.
        await connectToDatabase();

        // Verify that mongoose.connect was called with the correct URI and options.
        expect(connectStub.calledOnce).to.be.true;
        expect(connectStub.firstCall.args[0]).to.equal(uri);
        expect(connectStub.firstCall.args[1]).to.deep.include({
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });
});