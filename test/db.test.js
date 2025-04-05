const db = require('../db');

describe('Database', () => {
  it('should connect to the database', async () => {
    const connection = await db.connect();
    expect(connection).toBeTruthy();
  });

  it('should retrieve users from the database', async () => {
    const users = await db.getUsers();
    expect(Array.isArray(users)).toBe(true);
  });
});