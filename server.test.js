// server.test.js
const request = require('supertest');
const { app, getDataFromDatabase } = require('./server');

jest.mock('./server', () => ({
    ...jest.requireActual('./server'),
    getDataFromDatabase: jest.fn(),
}));

describe('GET /api/data', () => {
    it('should return data from the database', async () => {
        // Arrange
        const mockData = { message: 'Mocked Hello, World!' };
        getDataFromDatabase.mockReturnValue(mockData);

        // Act
        const response = await request(app).get('/api/data');

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
    });
});