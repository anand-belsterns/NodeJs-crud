const db = require('../db');

describe('Database Module', () => {
  test('should connect to the database', async () => {
    const connection = await db.connect();
    expect(connection).toBeDefined();
  });

  test('should retrieve data', async () => {
    const data = await db.getData();
    expect(data).toBeInstanceOf(Array);
  });

  test('should handle errors', async () => {
    await expect(db.getDataWithError()).rejects.toThrow();
  });
});