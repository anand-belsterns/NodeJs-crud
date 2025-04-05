const UserController = require('../user/UserController');

describe('UserController', () => {
  it('should create a user', () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const result = UserController.createUser(userData);
    expect(result).toHaveProperty('id');
    expect(result.name).toBe(userData.name);
  });

  it('should get a user by ID', () => {
    const userId = 1;
    const result = UserController.getUserById(userId);
    expect(result).toHaveProperty('id', userId);
  });

  it('should update a user', () => {
    const userId = 1;
    const updateData = { name: 'Jane Doe' };
    const result = UserController.updateUser(userId, updateData);
    expect(result.name).toBe(updateData.name);
  });

  it('should delete a user', () => {
    const userId = 1;
    const result = UserController.deleteUser(userId);
    expect(result).toBe(true);
  });
});