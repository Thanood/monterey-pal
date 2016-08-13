export {AURELIACLI} from './aurelia-cli';
export {FS}         from './fs';
export {SESSION}    from './session';
export {NPM}        from './npm';
export {JSPM}       from './jspm';
export {OS}         from './os';
export {ELECTRON}   from './electron';

import {AURELIACLI} from './aurelia-cli';
import {FS}         from './fs';
import {SESSION}    from './session';
import {NPM}        from './npm';
import {JSPM}       from './jspm';
import {OS}         from './os';
import {ELECTRON}   from './electron';

export function initializePAL(callback) {
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function(subject, name) {
      let pd = Object.getOwnPropertyDescriptor(subject, name);
      let proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(FS, SESSION, AURELIACLI, NPM, JSPM, OS, ELECTRON);
}
