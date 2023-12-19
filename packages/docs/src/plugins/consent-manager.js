const path = require('path')

module.exports = function () {
  return {
    name: 'consent-manager',
    getClientModules() {
      return [path.resolve(__dirname, './client-plugin')]
    },
  }
}
