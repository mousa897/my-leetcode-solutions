// Question:
// Given an integer array nums, a reducer function fn, and an initial value init,
// return the final result obtained by executing fn on each element sequentially,
// passing in the return value from the preceding calculation.
// val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2])...
// If the array is empty, return init.
// Solve it without the built-in Array.reduce method.

// Solution:
var reduce = function (nums, fn, init) {
  let result = init;
  if (nums.length === 0) return init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};
