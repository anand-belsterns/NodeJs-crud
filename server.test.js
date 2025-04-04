// Jest test case starts here
const app = require('./app');
const http = require('http');

jest.mock('./app'); // Mocking the app module

describe('Server Initialization', () => {
  let server;
  const port = 3000; // Use a fixed port for testing

  beforeAll(() => {
    // Mock the listen method of the http module to simulate server startup
    server = {
      close: jest.fn(),
    };
    jest.spyOn(http, 'createServer').mockReturnValue(server);
    
    // Set up the environment variable if needed
    process.env.PORT = port;
    // Start the server
    app.listen.mockImplementation((port, callback) => {
      callback();
      return server;
    });
  });

  afterAll(() => {
    // Clean up by closing the server
    server.close();
  });

  it('should start the server on the specified port', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    require('./server'); // Assuming the original code is in a server.js file

    expect(app.listen).toHaveBeenCalledWith(port, expect.any(Function));
    expect(logSpy).toHaveBeenCalledWith('Express server listening on port ' + port);

    logSpy.mockRestore();
  });
});
// Jest test case ends here