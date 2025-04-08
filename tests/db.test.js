const db = require('../db');

describe('Database Module', () => {
    test('should connect to the database', async () => {
        const connection = await db.connect();
        expect(connection).toBeDefined();
        await db.disconnect();
    });

    test('should insert a record', async () => {
        const record = { name: 'Test', value: 123 };
        const result = await db.insert(record);
        expect(result).toHaveProperty('id');
    });

    test('should fetch a record', async () => {
        const record = await db.fetch(1);
        expect(record).toHaveProperty('name');
    });
});