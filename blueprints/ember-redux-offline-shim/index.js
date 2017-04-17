module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-offline', target: '2.0.0'},
      {name: 'babel-plugin-transform-class-properties', target: '6.24.1'},
      {name: 'babel-plugin-transform-object-rest-spread', target: '6.23.0'},
      {name: 'babel-plugin-transform-flow-strip-types', target: '6.22.0'},
      {name: 'babel-preset-latest', target: '6.24.1'},
      {name: 'ember-redux-persist-shim', target: '0.0.3'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
