const mongoose = require('mongoose');
const User = require('../user/User');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user successfully', async () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe('John Doe');
    expect(savedUser.email).toBe('john@example.com');
  });

  it('should not create a user without email', async () => {
    const user = new User({ name: 'Jane Doe', password: 'password123' });
    await expect(user.save()).rejects.toThrow();
  });
});