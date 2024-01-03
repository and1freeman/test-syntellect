const assert = require('node:assert').strict;

const testString = 'кошка,1,собака,лошадь,собака,корова,гусь,гусь,кошка,лошадь,слон';

function removeDuplicates(string) {
  return string.split(',').filter((s, i, ss) => ss.indexOf(s) === i).join(',');

  // return Object.keys(string.split(',').reduce((acc, el) => {
  //   acc[el] = el;
  //   return acc;
  // }, {})).join(',')


  // return Array.from(string.split(',').reduce((acc, el) => {
  //   acc.set(el, el);
  //   return acc;
  // }, new Map()).values()).join(',')
}

assert.equal(removeDuplicates(testString), 'кошка,1,собака,лошадь,корова,гусь,слон');
