if (typeof globalThis.localStorage === 'undefined') {
  const Storage = require('localstorage-memory');
  globalThis.localStorage = new Storage();
  globalThis.localStorage.getItem = function(key) {
    return this.store[key] || null;
  };
  globalThis.localStorage.setItem = function(key, value) {
    this.store[key] = String(value);
  };
  globalThis.localStorage.removeItem = function(key) {
    delete this.store[key];
  };
  globalThis.localStorage.clear = function() {
    this.store = {};
  };
}
