const User = require('./User');

describe('User Class', () => {
  let user;

  beforeEach(() => {
    user = new User('John Doe', 'john@example.com');
  });

  test('should create a user with a name and email', () => {
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  test('should return user info', () => {
    expect(user.getInfo()).toBe('Name: John Doe, Email: john@example.com');
  });
});