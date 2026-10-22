const test = require('node:test');
const assert = require('node:assert');
const server = require('../src/server');

test('GET /health and /add', async (t) => {
  await new Promise((r) => server.listen(0, r));
  t.after(() => server.close());
  const base = `http://localhost:${server.address().port}`;

  const health = await (await fetch(`${base}/health`)).json();
  assert.deepStrictEqual(health, { status: 'ok' });

  const sum = await (await fetch(`${base}/add?a=2&b=3`)).json();
  assert.deepStrictEqual(sum, { result: 5 });
});
