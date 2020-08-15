const test = require('ava');
const decode = require('./decode');
const encode = require('./encode');

const decoded = [3, 3, 3, 3, 3, 8, 0, 0];
const encoded = [5, 3, 1, 8, 2, 0];

test('decode', t => {
  const actual = decode(encoded);
  t.deepEqual(actual, decoded);
});

test('encoded', t => {
  const actual = encode(decoded);
  t.deepEqual(actual, encoded);
});
