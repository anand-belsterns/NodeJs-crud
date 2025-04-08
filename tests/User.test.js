const User = require('../user/User');

describe('User Class', () => {
    it('should create a user with a name and age', () => {
        const user = new User('John Doe', 30);
        expect(user.name).toBe('John Doe');
        expect(user.age).toBe(30);
    });

    it('should return user info', () => {
        const user = new User('Jane Doe', 25);
        expect(user.getInfo()).toBe('Jane Doe is 25 years old.');
    });
});