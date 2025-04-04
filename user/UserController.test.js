// user/UserController.test.js
const UserController = require('./UserController');
const User = require('./User'); // Mock the User model
const sinon = require('sinon');
const { expect } = require('chai');

describe('UserController', () => {
    beforeEach(() => {
        sinon.restore(); // Restore original methods before each test
    });

    it('should create a user', async () => {
        const mockUser = { name: 'John Doe', email: 'john@example.com' };
        const saveStub = sinon.stub(User.prototype, 'save').resolves(mockUser);

        const result = await UserController.createUser(mockUser);
        expect(result).to.deep.equal(mockUser);
        expect(saveStub.calledOnce).to.be.true;
    });

    it('should get a user', async () => {
        const userId = '12345';
        const mockUser = { id: userId, name: 'Jane Doe' };
        const findByIdStub = sinon.stub(User, 'findById').resolves(mockUser);

        const result = await UserController.getUser(userId);
        expect(result).to.deep.equal(mockUser);
        expect(findByIdStub.calledOnceWith(userId)).to.be.true;
    });

    it('should update a user', async () => {
        const userId = '12345';
        const mockUpdatedUser = { id: userId, name: 'Jane Smith' };
        const findByIdAndUpdateStub = sinon.stub(User, 'findByIdAndUpdate').resolves(mockUpdatedUser);

        const result = await UserController.updateUser(userId, { name: 'Jane Smith' });
        expect(result).to.deep.equal(mockUpdatedUser);
        expect(findByIdAndUpdateStub.calledOnce).to.be.true;
    });

    it('should delete a user', async () => {
        const userId = '12345';
        const mockDeletedUser = { id: userId, name: 'Jane Doe' };
        const findByIdAndDeleteStub = sinon.stub(User, 'findByIdAndDelete').resolves(mockDeletedUser);

        const result = await UserController.deleteUser(userId);
        expect(result).to.deep.equal(mockDeletedUser);
        expect(findByIdAndDeleteStub.calledOnce).to.be.true;
    });
});