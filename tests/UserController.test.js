const UserController = require('../user/UserController');

describe('UserController', () => {
    let userController;

    beforeEach(() => {
        userController = new UserController();
    });

    test('should create a user', () => {
        const user = userController.createUser('John Doe', 'john@example.com');
        expect(user).toHaveProperty('id');
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('john@example.com');
    });

    test('should return user by id', () => {
        const user = userController.createUser('Jane Doe', 'jane@example.com');
        const foundUser = userController.getUserById(user.id);
        expect(foundUser).toEqual(user);
    });

    test('should update user', () => {
        const user = userController.createUser('John Doe', 'john@example.com');
        userController.updateUser(user.id, { name: 'John Smith' });
        const updatedUser = userController.getUserById(user.id);
        expect(updatedUser.name).toBe('John Smith');
    });

    test('should delete user', () => {
        const user = userController.createUser('John Doe', 'john@example.com');
        userController.deleteUser(user.id);
        const deletedUser = userController.getUserById(user.id);
        expect(deletedUser).toBeUndefined();
    });
});