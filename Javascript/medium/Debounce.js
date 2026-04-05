// Question:
// Given a function fn and a time in milliseconds t, return a debounced version
// of that function. A debounced function's execution is delayed by t milliseconds
// and cancelled if called again within that window of time.

// Solution:
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};
