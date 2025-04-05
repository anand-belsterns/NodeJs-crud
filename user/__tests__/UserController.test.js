const UserController = require('../UserController');

describe('UserController', () => {
  test('should create a user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const user = await UserController.createUser(userData);
    expect(user).toHaveProperty('id');
    expect(user.name).toBe(userData.name);
  });

  test('should get a user by id', async () => {
    const userId = 1;
    const user = await UserController.getUserById(userId);
    expect(user).toHaveProperty('id', userId);
  });

  test('should update a user', async () => {
    const userId = 1;
    const updatedData = { name: 'Jane Doe' };
    const user = await UserController.updateUser(userId, updatedData);
    expect(user.name).toBe(updatedData.name);
  });

  test('should delete a user', async () => {
    const userId = 1;
    const response = await UserController.deleteUser(userId);
    expect(response).toBe(true);
  });
});