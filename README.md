# UNSULLIED

[![Greenkeeper badge](https://badges.greenkeeper.io/aichholzer/Unsullied.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/aichholzer/Unsullied.svg?branch=master)](https://travis-ci.org/aichholzer/Unsullied)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/Unsullied.svg)](https://gemnasium.com/github.com/aichholzer/Unsullied)
[![Downloads](https://img.shields.io/npm/dt/unsullied.svg)](https://www.npmjs.com/package/unsullied)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/Unsullied)

Random `unsullied` name generator.


### Install
```
npm install --save unsullied
```
If you need to use it as a CLI tool:
```
npm install -g unsullied
```


### Use
```
const unsullied = require('unsullied');
const name = unsullied();

// 'grey.worm'
```

With options:
```
const unsullied = require('unsullied');
const name = unsullied({
  separator: '-'
});

// 'grey-worm'
```

### Available options

* case: `upper` || `camel`,
* separator: `[string]` (Default: .),


### CLI use:
```
$> unsullied
// 'grey.worm'
```

```
$> unsullied --case=upper
// GREY.WORM
```

```
$> unsullied --case=camel
// grey.Worm
```


### Contribute
```
fork https://github.com/aichholzer/unsullied/
```

More ideas for **adjectives** and **vermin** (See `./lib/data.json`) are always welcome.


### License

[MIT](https://github.com/aichholzer/unsullied/blob/master/LICENSE)
