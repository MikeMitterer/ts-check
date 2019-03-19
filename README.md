# Check
> Little helper that provides a syntax to type-safe check values for their validity.

## Installation

    npm i @mmit/check
    yarn add @mmit/check

## Usage

```typescript
import { check, isBetween, isLessThan, isNotUndefined, startsWith } from '@mmit/check';

const v1 = check(5).ifit(isNotUndefined).else(5);   // v1 = 5
const v2 = check(3).ifit(isBetween(5, 10)).else(5); // v2 = 5
const v3 = check(3).ifit(isBetween(3, 4)).else(5); //  v3 = 3
const v4 = check(3).ifit(isLessThan(10)).else(10); //  v4 = 10
const v5 = check('Test').ifit(startsWith('M')).else('<undefined>'); // v5 = '<undefined>'  
```

It is quite easy to write your own `Verifyer`:
```typescript
import { Verifier } from '@mmit/check';

export const endsWith: (test: string) => Verifier<string> = (test: string) => (value) => {
    return typeof value === 'string' && value.endsWith(test);
};

```

### Check

For more examples - pls check out my [Tests](https://github.com/MikeMitterer/ts-check/tree/master/src/test/unit/check)

## Bugs / Contribute

You reach me via [GH - Issues](https://github.com/MikeMitterer/ts-check/issues)

Help is always welcome!

## Like

If you like this package please *star* it here on GH or follow me on [Twitter](https://twitter.com/MikeMitterer) 

## License

    MIT License

    Copyright (c) 2019, Mike Mitterer <office@mikemitterer.at>

    Mike Mitterer: http://www.MikeMitterer.at/

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
