# fix-buffer
Fixes Issues where NodeJS Buffers are Accidentally Converted into Simple Objects

# background
Sometimes when developing packages that run on the browser and in NodeJS,
you can run into weird edge cases where a Buffer is converted into a simple object
without any of its functions and Buffer.isBuffer fails.  This package undoes that
weird failure and reconverts a simple object that looks like a buffer into a Buffer.

# install
```bash
npm install fix-buffer
```

# usage
If you pass a broken buffer into fixBuffer, it re-converts the input into a buffer.
If you pass in something else like a random string, it just returns what you passed in.

```javascript
const fixBuffer = require("fix-buffer");

const brokenBuffer = {
    type: 'Buffer',
    data: [
      59, 48, 76,  7, 70, 67,
      39, 71, 13, 21, 52, 57
    ]
};
Buffer.isBuffer(brokenBuffer) // false

const fixedBuffer = fixBuffer(brokenBuffer);

Buffer.isBuffer(fixedBuffer) // true
```
