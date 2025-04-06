const mongoose = require('mongoose');

describe('MongoDB Connection', () => {
  it('should connect to MongoDB', async () => {
    const connectSpy = jest.spyOn(mongoose, 'connect');
    await mongoose.connect('mongodb://yourMongoDBURIGoesHere');
    expect(connectSpy).toHaveBeenCalledWith('mongodb://yourMongoDBURIGoesHere');
    connectSpy.mockRestore();
  });
});