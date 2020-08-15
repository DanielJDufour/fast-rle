# fast-rle
Fast Run Length Encoder and Decoder

# usage
## decoding
```javascript
import decode from 'fast-rle/decode';

const encoded = [5, 3, 1, 8, 2, 0];
const decoded = decode(encoded);
// [3, 3, 3, 3, 3, 8, 0, 0]
```
## encoding
```javascript
import encode from 'fast-rle/decode';

const numbers = [3, 3, 3, 3, 3, 8, 0, 0];
const encoded = decode(numbers);
// [5, 3, 1, 8, 2, 0]
```

# support
Post an issue at https://github.com/danieljdufour/fast-rle
