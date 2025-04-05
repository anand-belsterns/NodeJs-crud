const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
  it('fetches all products', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});