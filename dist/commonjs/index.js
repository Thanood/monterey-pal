'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELECTRON = exports.OS = exports.JSPM = exports.NPM = exports.SESSION = exports.FS = exports.AURELIACLI = undefined;

var _aureliaCli = require('./aurelia-cli');

Object.defineProperty(exports, 'AURELIACLI', {
  enumerable: true,
  get: function get() {
    return _aureliaCli.AURELIACLI;
  }
});

var _fs = require('./fs');

Object.defineProperty(exports, 'FS', {
  enumerable: true,
  get: function get() {
    return _fs.FS;
  }
});

var _session = require('./session');

Object.defineProperty(exports, 'SESSION', {
  enumerable: true,
  get: function get() {
    return _session.SESSION;
  }
});

var _npm = require('./npm');

Object.defineProperty(exports, 'NPM', {
  enumerable: true,
  get: function get() {
    return _npm.NPM;
  }
});

var _jspm = require('./jspm');

Object.defineProperty(exports, 'JSPM', {
  enumerable: true,
  get: function get() {
    return _jspm.JSPM;
  }
});

var _os = require('./os');

Object.defineProperty(exports, 'OS', {
  enumerable: true,
  get: function get() {
    return _os.OS;
  }
});

var _electron = require('./electron');

Object.defineProperty(exports, 'ELECTRON', {
  enumerable: true,
  get: function get() {
    return _electron.ELECTRON;
  }
});
exports.initializePAL = initializePAL;
function initializePAL(callback) {
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(_fs.FS, _session.SESSION, _aureliaCli.AURELIACLI, _npm.NPM, _jspm.JSPM, _os.OS, _electron.ELECTRON);
}