'use strict';
module.exports = function () {
  return /^\*$|^v?\s*(?:0|[1-9]\d*)(?:\.(?:x|\*|0|[1-9]\d*)){0,2}(?:[\-+][\da-z.-]+)*\s*(?:(?:(?:\|\||-)\s*(?:0|[1-9]\d*)(?:\.(?:x|\*|0|[1-9]\d*)){0,2}(?:[\-+][\da-z.-]+)*)?)$|^~?\s*[<>^]?\s*=?\s*v?\s*(?:0|[1-9]\d*)(?:\.(?:x|\*|0|[1-9]\d*)){0,2}(?:[\-+][\da-z.-]+)*$/ig;
};
