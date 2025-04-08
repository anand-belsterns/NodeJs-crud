const db = require('../db');

describe('Database Operations', () => {
    test('should connect to the database', async () => {
        const connection = await db.connect();
        expect(connection).toBeTruthy();
    });

    test('should insert a record', async () => {
        const result = await db.insert({ name: 'Test' });
        expect(result).toHaveProperty('id');
    });

    test('should fetch a record', async () => {
        const record = await db.fetch(1);
        expect(record).toHaveProperty('name');
    });

    test('should delete a record', async () => {
        const result = await db.delete(1);
        expect(result).toBe(true);
    });
});