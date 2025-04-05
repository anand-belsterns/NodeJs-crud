const mongoose = require('mongoose');
const User = require('../user/User');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user with valid data', async () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe('John Doe');
    expect(savedUser.email).toBe('john@example.com');
  });

  it('should not create a user without a name', async () => {
    const user = new User({ email: 'john@example.com', password: 'password123' });
    let err;
    try {
      await user.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
  });
});