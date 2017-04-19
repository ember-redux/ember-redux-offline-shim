/* eslint-env node */
'use strict';

const metal = require('broccoli-metal');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const esTranspiler = require('broccoli-babel-transpiler');

module.exports = {
  name: 'redux-offline',

  importEmberFetch (tree) {
    return metal(tree, (files) => {
      Object.keys(files).forEach((key) => {
        if (files[key].indexOf('global fetch') !== -1) {
          files[key] = `import fetch from 'fetch'\n\n${files[key]}`
        }
      });
    });
  },

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

    const offlineTreeWithEmberFetch = this.importEmberFetch(offlineTree);

    if (!tree) {
      return this._super.treeForAddon.call(this, offlineTreeWithEmberFetch);
    }

    const trees = mergeTrees([offlineTreeWithEmberFetch, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
