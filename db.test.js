const mongoose = require('mongoose');
const db = require('./db');

test('should connect to MongoDB', async () => {
  await mongoose.connect('mongodb://yourMongoDBURIGoesHere');
  expect(mongoose.connection.readyState).toBe(1);
});