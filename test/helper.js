var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'ProbableMemory.app', 'Contents', 'MacOS', 'ProbableMemory');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'ProbableMemory');
      default:
        throw 'Unsupported platform';
    }
  }
};
