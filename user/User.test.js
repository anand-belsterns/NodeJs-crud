const mongoose = require('mongoose');
const User = require('./User');

describe('User Model', () => {
  it('should create a user with valid data', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe('John Doe');
    expect(savedUser.email).toBe('john@example.com');
  });

  it('should not create a user without a name', async () => {
    const user = new User({
      email: 'john@example.com',
      password: 'password123'
    });
    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });

  it('should not create a user without an email', async () => {
    const user = new User({
      name: 'John Doe',
      password: 'password123'
    });
    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });

  it('should not create a user without a password', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john@example.com'
    });
    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
});