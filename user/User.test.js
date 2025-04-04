// Jest test case starts here
const mongoose = require('mongoose');
const UserModel = require('./path/to/your/userModel'); // Adjust the path to where your User model file is located

jest.mock('mongoose', () => {
  const mockModel = jest.fn();
  return {
    model: mockModel,
    Schema: jest.fn().mockImplementation(() => ({
      // Mock implementation of Schema methods if needed
    })),
  };
});

describe('User Model', () => {
  it('should create a user model with the correct schema', () => {
    const expectedSchema = {
      name: String,
      email: String,
      password: String,
    };

    const User = UserModel;
    expect(mongoose.model).toHaveBeenCalledWith('User', expect.anything());
    expect(mongoose.Schema).toHaveBeenCalledWith(expectedSchema);
  });
});

// Jest test case ends here