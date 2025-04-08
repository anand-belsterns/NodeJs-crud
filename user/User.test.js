const User = require('./User');

describe('User Class', () => {
    it('should create a user with a name', () => {
        const user = new User('John Doe');
        expect(user.name).toBe('John Doe');
    });

    it('should return user info', () => {
        const user = new User('Jane Doe');
        expect(user.getInfo()).toBe('User: Jane Doe');
    });
});