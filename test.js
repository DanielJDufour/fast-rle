const test = require("flug");
const decode = require("./decode");
const encode = require("./encode");

const decoded = [3, 3, 3, 3, 3, 8, 0, 0];
const encoded = [5, 3, 1, 8, 2, 0];
const encoded_2 = [2, 3, 2, 3, 1, 3, 1, 8, 2, 0];
const chunked = [
  [3, 5],
  [8, 1],
  [0, 2]
];

test("decode", ({ eq }) => {
  const actual = decode(encoded);
  eq(actual, decoded);
});

test("encoded", ({ eq }) => {
  const actual = encode(decoded);
  eq(actual, encoded);
});

test("encoded with max run length", ({ eq }) => {
  const actual = encode(decoded, { max_run_length: 2 });
  eq(actual, encoded_2);
});

test("encoded with chunking", ({ eq }) => {
  const actual = encode(decoded, { chunk: true });
  eq(actual, chunked);
});
