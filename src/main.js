let memoize = (fn) => {
  let cache = {};
  return (...a) => {
    let key = JSON.stringify(a);
    if (cache[key]) {
      return cache[key].value;
    }
    let result = fn(...a);
    cache[key] = {
      args : a,
      value : result
    };
    return result;
  };
};

module.exports = memoize;
