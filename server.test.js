const request = require('supertest');
const app = require('./server'); // Import the server
const someExternalService = require('./externalService'); // Import the external service

jest.mock('./externalService'); // Mock the external service

describe('GET /api/data', () => {
    it('should return data when the external service call is successful', async () => {
        // Arrange: Set up the mock return value
        const mockData = { id: 1, name: 'Test Data' };
        someExternalService.getData.mockResolvedValue(mockData);

        // Act: Make the request to the endpoint
        const response = await request(app).get('/api/data');

        // Assert: Check the response
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
        expect(someExternalService.getData).toHaveBeenCalledTimes(1); // Verify the external service was called
    });

    it('should return 500 status code when there is an error', async () => {
        // Arrange: Set up the mock to throw an error
        someExternalService.getData.mockRejectedValue(new Error('Error fetching data'));

        // Act: Make the request to the endpoint
        const response = await request(app).get('/api/data');

        // Assert: Check the response
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal Server Error' });
        expect(someExternalService.getData).toHaveBeenCalledTimes(1); // Verify the external service was called
    });
});