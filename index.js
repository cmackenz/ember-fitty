/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-fitty',
  options: {
    nodeAssets: {
      fitty: {
        srcDir: 'src',
        import: ['fitty.js']
      }
    }
  }
};
