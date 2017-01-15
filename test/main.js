const assert = require('assert');
const memoize = require('../src/main');

describe('#memoize', function() {

  it('should keep behaviour', function() {
    let fib = (i) => {
      if (i < 2) {
        return 1;
      }
      return fib(i - 1) + fib(i - 2);
    };

    assert.equal(fib(7), memoize(fib)(7));
  });

  it('mulitple parameters', function() {
    let sum = (a, b, c) => a + b + c;
    assert.equal(sum(1, 2, 5), memoize(sum)(1, 2, 5));
  });

  it('test dont call me twice', function() {
    let hiddenSideEffect = 0;
    let dontTellAnyone = (a, b) => {
      hiddenSideEffect++;
      return a + b;
    };
    let fn = memoize(dontTellAnyone);
    assert.equal(4, fn(2, 2));
    assert.equal(4, fn(2, 2));
    assert.equal(1, hiddenSideEffect);
  });

  it('should update recursively', function() {
    let hiddenSideEffect = 0;
    let fib = (i) => {
      hiddenSideEffect++;
      if (i < 2) {
        return 1;
      }
      return fib(i - 1) + fib(i - 2);
    };
    let fn = memoize(fib);

    assert.equal(3, fn(3));
    assert.equal(5, hiddenSideEffect);

    hiddenSideEffect = 0;
    assert.equal(3, fn(3));
    assert.equal(0, hiddenSideEffect);

    // TODO : this
    // hiddenSideEffect = 0;
    // assert.equal(2, fn(2));
    // assert.equal(0, hiddenSideEffect);
  });

});
