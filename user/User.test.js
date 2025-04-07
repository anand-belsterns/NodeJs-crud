const User = require('./User');

describe('User Class', () => {
    it('should create a user with a name and age', () => {
        const user = new User('Alice', 30);
        expect(user.name).toBe('Alice');
        expect(user.age).toBe(30);
    });

    it('should return user info', () => {
        const user = new User('Bob', 25);
        expect(user.getInfo()).toBe('Name: Bob, Age: 25');
    });
});