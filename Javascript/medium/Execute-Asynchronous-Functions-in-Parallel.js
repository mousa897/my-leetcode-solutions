// Question:
// Given an array of asynchronous functions, return a new promise that resolves
// when all promises are resolved with an array of results in the same order.
// If any promise rejects, the returned promise should also reject with that reason.
// Solve it without using the built-in Promise.all function.

// Solution:
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;
          if (count === functions.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
