const http = require('http');

const server = http.createServer((req, res) => {
  setTimeout(() => {
    try {
      if (req.url === '/error') {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
      }
    } catch (err) {
      console.error('Error handling request:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});