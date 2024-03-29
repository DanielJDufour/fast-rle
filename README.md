# fast-rle
Fast Run Length Encoder and Decoder

# usage
## decoding
```javascript
import decode from 'fast-rle/decode';

const encoded = [5, 3, 1, 8, 2, 0];
decode(encoded);
[3, 3, 3, 3, 3, 8, 0, 0]
```
## encoding
```javascript
import encode from 'fast-rle/encode';

const nums = [3, 3, 3, 3, 3, 8, 0, 0];
encode(nums);
[5, 3, 1, 8, 2, 0]

encode(nums, { chunk: true });
[ [3, 5], [8, 1], [0, 2] ]

encode(nums, { max_run_length: 2 });
[2, 3, 2, 3, 1, 3, 1, 8, 2, 0]
```

# support
Post an issue at https://github.com/danieljdufour/fast-rle
