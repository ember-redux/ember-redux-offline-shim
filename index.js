/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const esTranspiler = require('broccoli-babel-transpiler');

module.exports = {
  name: 'redux-offline',
  treeForAddon (tree) {
    const offlinePath = path.dirname(require.resolve('redux-offline/src/index.js'));

    var offlineTree = esTranspiler(offlinePath, {
      plugins: [
        'transform-object-rest-spread',
        'transform-class-properties',
        'transform-flow-strip-types'
      ],
      presets: [
          ['latest', 'react']
      ]
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, offlineTree);
    }

    const trees = mergeTrees([offlineTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
