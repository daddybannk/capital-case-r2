# capital-case-r2

Additional JS `String.prototype` method.

## Try it

https://daddybannk.github.io/capital-case-r2

## Installation

```
npm install capital-case-r2
```

## Usage

### String.toCapitalCase(ignoreCase = true)

```
import "capital-case-r2";

const str = "This word is UPPER CASE.";

// ignoreCase = true (default)
console.log(str.toCapitalCase()); // "This Word Is UPPER CASE."

// ignoreCase = false
console.log(str.toCapitalCase(false)); // "This Word Is Upper Case."
```

## Test

```
npm install --only=dev
npm run test
```

## License

This project is licensed under the terms of the MIT license.
