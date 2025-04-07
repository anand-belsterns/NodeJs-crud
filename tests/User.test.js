const User = require('../user/User');

describe('User Class', () => {
    let user;

    beforeEach(() => {
        user = new User('John', 'Doe');
    });

    test('should create a user with first and last name', () => {
        expect(user.firstName).toBe('John');
        expect(user.lastName).toBe('Doe');
    });

    test('should return full name', () => {
        expect(user.getFullName()).toBe('John Doe');
    });
});