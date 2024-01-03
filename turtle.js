const assert = require('node:assert').strict;

const UP_RATE = 50;
const DOWN_RATE = 30;
const HEIGHT = 100;

function calc(upRate, downRate, height) {
  let i = 0;
  let currentHeight = 0;

  while (true) {
    i += 1;
    currentHeight += upRate;

    if (currentHeight >= height) {
      break;
    }

    currentHeight -= downRate;
  }

  return i;
}

assert.equal(calc(UP_RATE, DOWN_RATE, HEIGHT), 4);
