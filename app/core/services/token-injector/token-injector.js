'use strict';

module.exports = 'app.core.services.tokenInjector';

angular.module('app.core.services.tokenInjector', [])
    .factory('tokenInjector', tokenInjector);

tokenInjector.$inject = [];

function tokenInjector() {
  return {
    request: function (config) {
      return config;
    }
  }
}
