const http = require('http');
const PORT = 3000;
const fs = require('fs');
http
  .createServer((req, res) => {
    if (req.url === '/') {
      req.url = 'index.html';
    } else if (req.url === '/cars') {
      req.url = 'find.html';
    }
    let path = 'public/' + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(PORT, 'localhost', () => {
    console.log(`Server sudah berjalan, silahkan buka http://localhost:${PORT}`);
  });
