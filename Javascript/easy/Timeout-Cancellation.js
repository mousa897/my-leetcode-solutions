// Question:
// Given a function fn, an array of arguments args, and a timeout t in milliseconds,
// return a cancel function cancelFn.
// If cancelFn is invoked before t milliseconds, it should cancel the delayed execution of fn.
// Otherwise if cancelFn is not invoked within t milliseconds, fn should execute with args.

// Solution:
var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => {
    fn(...args);
  }, t);
  return function cancelFn() {
    clearTimeout(timer);
  };
};
