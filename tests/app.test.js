const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

// Add more tests for other routes and functionalities.