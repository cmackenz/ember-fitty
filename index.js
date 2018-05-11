/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-fitty',
  options: {
    nodeAssets: {
      echarts: {
        srcDir: 'dist',
        import: ['fitty.js']
      }
    }
  }
};
