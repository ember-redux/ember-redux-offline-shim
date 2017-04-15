/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'redux-offline',
  treeForAddon (tree) {
    const offlinePath = path.dirname(require.resolve('redux-offline/src/index.js'));
    let offlineTree = this.treeGenerator(offlinePath);

    if (!tree) {
      return this._super.treeForAddon.call(this, offlineTree);
    }

    const trees = mergeTrees([offlineTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
