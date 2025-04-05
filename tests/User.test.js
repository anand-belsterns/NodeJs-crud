const User = require('../user/User');

describe('User Class', () => {
  let user;

  beforeEach(() => {
    user = new User('John Doe', 'john@example.com');
  });

  test('should create a user with name and email', () => {
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  test('should throw an error if name is empty', () => {
    expect(() => new User('', 'john@example.com')).toThrow('Name is required');
  });

  test('should throw an error if email is invalid', () => {
    expect(() => new User('John Doe', 'invalid-email')).toThrow('Invalid email');
  });
});