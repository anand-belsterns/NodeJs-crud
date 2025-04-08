const db = require('../db');

describe('Database Module', () => {
    test('should connect to the database', async () => {
        const connection = await db.connect();
        expect(connection).toBeDefined();
        await db.disconnect();
    });

    test('should insert a record', async () => {
        const record = { name: 'Test' };
        const result = await db.insert(record);
        expect(result).toHaveProperty('id');
    });

    test('should retrieve a record', async () => {
        const record = { name: 'Test' };
        const inserted = await db.insert(record);
        const retrieved = await db.get(inserted.id);
        expect(retrieved.name).toBe(record.name);
    });
});