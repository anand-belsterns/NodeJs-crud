const db = require('../db');

describe('Database Module', () => {
    test('should connect to the database', async () => {
        const connection = await db.connect();
        expect(connection).toBeTruthy();
    });

    test('should fetch data', async () => {
        const data = await db.fetchData();
        expect(data).toBeInstanceOf(Array);
    });

    test('should insert data', async () => {
        const result = await db.insertData({ name: 'Test' });
        expect(result).toHaveProperty('id');
    });
});