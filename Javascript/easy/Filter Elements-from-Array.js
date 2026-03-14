// Question:
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// fn takes two arguments: arr[i] and i (index)
// filteredArr should only contain elements where fn(arr[i], i) evaluates to a truthy value.
// Solve it without the built-in Array.filter method.

// Solution:
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    let number = fn(arr[i], i);
    if (number) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
