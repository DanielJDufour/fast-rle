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
import encode from 'fast-rle/decode';

const numbers = [3, 3, 3, 3, 3, 8, 0, 0];
encode(numbers);
[5, 3, 1, 8, 2, 0]

encode(decoded, { max_run_length: 2 });
[2, 3, 2, 3, 1, 3, 1, 8, 2, 0]

encode(decoded, { chunk: true });
[2, 3, 2, 3, 1, 3, 1, 8, 2, 0]
```

# support
Post an issue at https://github.com/danieljdufour/fast-rle
