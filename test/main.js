const assert = require('assert');
const memoize = require('../src/main');

let fib = (i) => {
  if (i < 2) {
    return 0;
  }
  return fib(i - 1) + fib(i - 2);
};

describe('#memoize', function() {

  it('should keep behaviour', function() {
    assert.equal(fib(7), memoize(fib)(7));
  });

});