# undef-check
Undefined and Null Checker

```bash
npm i undef-check
```

### import module
```js
// ES6 Syntax
import {undefCheck} from "undef-check";

// Commonjs Syntax
const {undefCheck} = require("undef-check");

// Commonjs with custom name
const undefinedChecker = require("undef-check").undefCheck;
```
### usage
```js
undefCheck(possibleUndefinedVariable);
```

### demo
```js
let nullVariable = null;
let undefinedVariable = void 0;

undefCheck(undefinedVariable); // throws error with default message 

undefCheck(nullVariable, "Variable cannot be null."); // throws error with "Variable cannot be null." message  

undefCheck(-6.2342); // no errors

undefCheck("Hello, world"); // no errors
```

### types
```ts
type undefCheck = (value: any, message?: string) => void; // throws Error.
```