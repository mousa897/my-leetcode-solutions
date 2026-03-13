// Question:
// Given an integer array arr and a mapping function fn, return a new array
// with a transformation applied to each element.
// returnedArray[i] = fn(arr[i], i)
// Solve it without the built-in Array.map method.

// Solution:
var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i);
    newArray.push(res);
  }
  return newArray;
};
