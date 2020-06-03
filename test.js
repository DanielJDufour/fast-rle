const test = require('ava');
const decode = require('./decode');

test('decode', t => {
  const encoded = [5, 3, 1, 8, 2, 0];
  const decoded = decode(encoded);
  const expected = [3, 3, 3, 3, 3, 8, 0, 0];
  t.deepEqual(decoded, expected);
});
