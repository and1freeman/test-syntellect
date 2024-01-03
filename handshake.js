const assert = require('node:assert').strict;

function getHandshakesCount(n) {
  let sum = 0;

  for (let i = 1; i < n; ++i) {
    sum += i;
  }

  return sum;
}

assert.equal(getHandshakesCount(2), 1);
assert.equal(getHandshakesCount(3), 3);
assert.equal(getHandshakesCount(4), 6);
assert.equal(getHandshakesCount(10), 45);
