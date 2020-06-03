const decode = nums => {
  const decoded = [];
  for (let i = 0; i < nums.length; i+=2) {
    const run_length = nums[i];
    const value = nums[i + 1];
    for (let ii = 0; ii < run_length; ii++) {
      decoded.push(value);
    }
  }
  return decoded;
};

module.exports = decode;
