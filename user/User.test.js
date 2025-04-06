const mongoose = require('mongoose');
const User = require('./User');

describe('User Model', () => {
  it('should create a user with name, email, and password', async () => {
    const user = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    expect(user.name).toBe('Test User');
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('password123');
  });
});