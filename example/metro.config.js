const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native-currency-list': path.resolve(__dirname, '..', 'lib'),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '..', 'lib'),
  ],
};
