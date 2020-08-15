const encode = nums => {
    const encoded = [];
    let current = nums[0];
    let run_length = 1;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num === current) {
            run_length++;
        } else {
            encoded.push(run_length);
            encoded.push(current);
            current = num;
            run_length = 1;
        }
    }
    encoded.push(run_length);
    encoded.push(current);
    return encoded;
};

module.exports = encode;
