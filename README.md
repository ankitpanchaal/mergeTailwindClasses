
# Intro

To marge two classname of tailwind classnames use mergeTailwindClasses package. It supports ReactJs(Also NextJs).


## Installation

```bash
npm i mergetailwindclasses
```
    
## Usage

```bash
// CommonJS
const mergetailwindclasses = require("mergetailwindclasses");

// ES6
// import mergetailwindclasses from "mergetailwindclasses";

function xyz() {
  console.log(
    mergetailwindclasses("   h-4 border-3 w-2", "  w-9   border-1  ")
  );
}

xyz();

```

```bash 
Output is: h-4 border-1 w-9
```

## Support

If any type of bug occurs, please raise an issue.

At https://github.com/ankitpanchaal/mergeTailwindClasses
## Tech Stack

Node.js


