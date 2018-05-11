/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-fitty',
  options: {
    nodeAssets: {
      fitty: {
        srcDir: 'dist',
        import: ['fitty.js']
      }
    }
  }
};
