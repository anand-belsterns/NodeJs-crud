const db = require('../db');

describe('Database Module', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.disconnect();
  });

  test('should connect to the database', async () => {
    const isConnected = await db.isConnected();
    expect(isConnected).toBe(true);
  });

  test('should retrieve data', async () => {
    const data = await db.getData();
    expect(data).toBeDefined();
  });

  test('should insert data', async () => {
    const result = await db.insertData({ name: 'Test' });
    expect(result).toHaveProperty('id');
  });
});