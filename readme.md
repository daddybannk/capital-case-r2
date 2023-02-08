# capital-case-r2

Additional JS `String.prototype` method.

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
console.log(str2.toCapitalCase(false)); // "This Word Is Upper Case."
```