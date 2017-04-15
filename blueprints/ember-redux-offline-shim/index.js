module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-offline', target: '2.0.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
