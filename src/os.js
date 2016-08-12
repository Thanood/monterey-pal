export const OS = {
  getPlatform() {
    throw new Error('Not implemented');
  },
  getNodeVersion() {
    throw new Error('Not implemented');
  },
  getNPMVersion() {
    throw new Error('Not implemented');
  },
  getChromeVersion() {
    throw new Error('Not implemented');
  },
  getElectronVersion() {
    throw new Error('Not implemented');
  },
  spawn(cmd, args) {
    throw new Error('Not implemented');
  },
  exec(cmd, args) {
    throw new Error('Not implemented');
  },
  kill(process) {
    throw new Error('Not implemented');
  },
  getEnv(key) {
    throw new Error('Not implemented');
  }
}
