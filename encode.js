function encode(nums, options) {
  const encoded = [];
  const max_run_length =
    options && options.max_run_length ? options.max_run_length : Infinity;
  const chunk = (options && options.chunk) || false;
  let current = nums[0];
  let run_length = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === current && run_length != max_run_length) {
      run_length++;
    } else {
      if (chunk) {
        encoded.push([current, run_length]);
      } else {
        encoded.push(run_length);
        encoded.push(current);
      }
      current = num;
      run_length = 1;
    }
  }
  if (chunk) {
    encoded.push([current, run_length]);
  } else {
    encoded.push(run_length);
    encoded.push(current);
  }
  return encoded;
}

module.exports = encode;
module.exports.default = encode;
