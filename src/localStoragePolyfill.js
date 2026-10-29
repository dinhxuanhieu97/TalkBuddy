const Storage = require('localstorage-memory');

if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = new Storage();
}

module.exports = globalThis.localStorage;
