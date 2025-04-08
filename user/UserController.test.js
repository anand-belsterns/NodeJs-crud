const UserController = require('./UserController');

describe('UserController', () => {
    let userController;

    beforeEach(() => {
        userController = new UserController();
    });

    test('should create a user', () => {
        const user = userController.createUser('John', 'Doe');
        expect(user).toEqual({ firstName: 'John', lastName: 'Doe' });
    });

    test('should get a user', () => {
        userController.createUser('Jane', 'Doe');
        const user = userController.getUser('Jane');
        expect(user).toEqual({ firstName: 'Jane', lastName: 'Doe' });
    });

    test('should return undefined for non-existing user', () => {
        const user = userController.getUser('NonExisting');
        expect(user).toBeUndefined();
    });
});