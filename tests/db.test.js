const db = require('../db');

describe('Database Module', () => {
  test('should connect to the database', async () => {
    const result = await db.connect();
    expect(result).toBeTruthy();
  });

  test('should retrieve data', async () => {
    const data = await db.getData();
    expect(data).toBeDefined();
  });

  test('should insert data', async () => {
    const result = await db.insertData({ name: 'test' });
    expect(result).toEqual({ success: true });
  });
});