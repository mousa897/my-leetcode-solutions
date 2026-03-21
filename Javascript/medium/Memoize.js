// Question:
// Given a function fn, return a memoized version of that function.
// A memoized function will never be called twice with the same inputs.
// Instead it will return a cached value.
// Assume there are 3 possible input functions: sum, fib, and factorial.

// Solution:
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = args.join(",");
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
