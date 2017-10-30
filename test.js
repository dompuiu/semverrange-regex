'use strict';
var assert = require('assert');
var semverRangeRegex = require('./');

var validRanges = [
  '*',
  '0.1.2',
  '0.1.20 || 1.2.4',
  '1.0.0',
  '1.0.0 - 2.0.0',
  '1.0.0-pre - 2.0.0-pre',
  '1.2.*',
  '1.2.* || 2.*',
  '1.2.x',
  '1.2.x || 2.x',
  '2',
  '2.*.*',
  '2.3',
  '2.x.x',
  '< 1.2',
  '<0.7.x',
  '<1.2',
  '<2.0.0',
  '<=2.0.0',
  '=0.7.x',
  '= 0.7.x',
  '~ 1.0',
  '~0.6.1-1',
  '~1',
  '~1.0',
  '~1.2.2',
  '~2.4',
  '~>1',
  '~>3.2.1',
  '~v0.5.4-pre',
  '1.2.3-alpha.10.beta.0+build.unicorn.rainbow'
];

var invalidRanges = [
  '01.8.0',
  '1.08.0',
  '1.0.08',
  '<=2.0.0 - 1.2.3'
];

it('should match semver ranges on test', function () {
  validRanges.forEach(function (el) {
    assert(semverRangeRegex().test(el), el);
  });
});

it('should not match invalid semver ranges on test', function () {
  invalidRanges.forEach(function (el) {
    assert(!semverRangeRegex().test(el), el);
  });
});
