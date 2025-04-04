// Jest test case starts here
const mongoose = require('mongoose');
const UserModel = require('./path/to/your/model'); // Adjust the path accordingly

jest.mock('mongoose', () => {
  const mockModel = jest.fn();
  const mockSchema = jest.fn();
  
  return {
    model: mockModel,
    Schema: mockSchema,
  };
});

describe('User Model', () => {
  beforeAll(() => {
    const UserSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String
    });
    mongoose.model.mockReturnValue(mockModel);
  });

  it('should create a user model', () => {
    expect(mongoose.model).toHaveBeenCalledWith('User', expect.anything());
    expect(mongoose.Schema).toHaveBeenCalledWith({
      name: String,
      email: String,
      password: String
    });
  });

  it('should be an instance of the mongoose model', () => {
    const userInstance = new UserModel();
    expect(userInstance).toBeInstanceOf(mockModel);
  });
});

// Jest test case ends here