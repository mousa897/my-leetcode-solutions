// Question:
// Given a function fn, an array of arguments args, and an interval time t,
// return a cancel function cancelFn.
// fn should be called with args immediately and then called again every t
// milliseconds until cancelFn is called at cancelTimeMs ms.

// Solution:
var cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => {
    fn(...args);
  }, t);

  return (cancelFn = () => {
    clearInterval(timer);
  });
};
