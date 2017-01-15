let memoize = (fn) => {
  return (...a) => {
    return fn(...a);
  };
};

module.exports = memoize;
