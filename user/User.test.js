const User = require('./User');

describe('User Class', () => {
  let user;

  beforeEach(() => {
    user = new User('John Doe', 'john@example.com');
  });

  test('should create a user with name and email', () => {
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  test('should update user email', () => {
    user.updateEmail('john.doe@example.com');
    expect(user.email).toBe('john.doe@example.com');
  });
});