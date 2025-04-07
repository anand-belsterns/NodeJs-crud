const UserController = require('../user/UserController');

describe('UserController', () => {
    let userController;

    beforeEach(() => {
        userController = new UserController();
    });

    test('should create a user', () => {
        const user = { name: 'John Doe', email: 'john@example.com' };
        const result = userController.createUser(user);
        expect(result).toEqual(expect.objectContaining(user));
    });

    test('should get a user by id', () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        userController.createUser(user);
        const result = userController.getUserById(1);
        expect(result).toEqual(user);
    });

    test('should update a user', () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        userController.createUser(user);
        const updatedUser = { name: 'Jane Doe' };
        const result = userController.updateUser(1, updatedUser);
        expect(result.name).toBe('Jane Doe');
    });

    test('should delete a user', () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        userController.createUser(user);
        userController.deleteUser(1);
        const result = userController.getUserById(1);
        expect(result).toBeUndefined();
    });
});