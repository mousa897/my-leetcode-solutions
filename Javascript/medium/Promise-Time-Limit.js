// Question:
// Given an asynchronous function fn and a time t in milliseconds, return a
// new time limited version of the input function.
// If fn completes within t milliseconds, resolve with the result.
// If fn exceeds the time limit, reject with "Time Limit Exceeded".

// Solution:
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args)
        .then(resolve)
        .catch(reject);
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
  };
};
