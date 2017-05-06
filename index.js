/* eslint-env node */
'use strict';

const metal = require('broccoli-metal');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

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

    let addon = this.addons.find(addon => addon.name === 'ember-cli-babel');
    let offlineTree = addon.transpileTree(offlinePath, {
      babel: {
        plugins: [
          'transform-object-rest-spread',
          'transform-class-properties',
          'transform-flow-strip-types'
        ],
        presets: [
          'latest',
          'react'
        ]
      },
      'ember-cli-babel': {
        compileModules: false
      }
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
