const mongoose = require('mongoose');

describe('MongoDB Connection', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://yourMongoDBURIGoesHere', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should connect to MongoDB', async () => {
    const dbState = mongoose.connection.readyState;
    expect(dbState).toBe(1); // 1 means connected
  });
});