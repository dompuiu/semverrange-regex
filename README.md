# semverrange-regex [![Build Status](https://travis-ci.org/sindresorhus/semver-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/semver-regex)
Regular expression for matching semver ranges.

## Install

```
$ npm install --save semverrange-regex
```

## Usage

```js
const semverRangeRegex = require('semverrange-regex');

semverRangeRegex().test('1.0.0-pre - 2.0.0-pre');
//=> true

semverRangeRegex().test('<=2.0.0');
//=> true
```

## License
MIT
