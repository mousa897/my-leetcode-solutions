// Question:
// Write a class that allows getting and setting key-value pairs, however a time
// until expiration is associated with each key.
// set(key, value, duration): returns true if un-expired key already exists, false otherwise.
// get(key): returns associated value if un-expired key exists, otherwise -1.
// count(): returns count of un-expired keys.

// Solution:
var TimeLimitedCache = function () {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let exists = this.cache[key] !== undefined;

  if (exists) {
    clearTimeout(this.cache[key].timer);
  }

  let timer = setTimeout(() => {
    delete this.cache[key];
  }, duration);

  this.cache[key] = { value, timer };

  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  const count = Object.keys(this.cache).length;
  return count;
};
