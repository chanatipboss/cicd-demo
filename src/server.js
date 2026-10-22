const http = require('node:http');
const { add } = require('./calc');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  res.setHeader('Content-Type', 'application/json');

  if (url.pathname === '/health') {
    res.end(JSON.stringify({ status: 'ok' }));
  } else if (url.pathname === '/add') {
    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));
    res.end(JSON.stringify({ result: add(a, b) }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`listening on ${port}`));
}

module.exports = server;
