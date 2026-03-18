// Question:
// Write a function argumentsLength that returns the count of arguments passed to it.

// Solution:
var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
};
