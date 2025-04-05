const User = require('../user/User');

describe('User Model', () => {
  it('should create a user with valid data', () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com' });
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should throw an error if no name is provided', () => {
    expect(() => new User({ email: 'john@example.com' })).toThrow();
  });

  it('should throw an error if no email is provided', () => {
    expect(() => new User({ name: 'John Doe' })).toThrow();
  });
});