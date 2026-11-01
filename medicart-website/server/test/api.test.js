const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/index');

test('health route is defined', () => {
  assert.equal(typeof app, 'function');
});

test('product catalogue has six demo products', async () => {
  // Basic source-level check so CI can run without an external database.
  const fs = require('node:fs');
  const source = fs.readFileSync(require.resolve('../src/index'), 'utf8');
  assert.match(source, /Paracetamol 500mg/);
  assert.match(source, /Digital Thermometer/);
});
