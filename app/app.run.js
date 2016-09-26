'use strict';

module.exports = 'app.run';

angular.module('app.run', [])
    .run(Run)

Run.$inject = ['$rootScope'];

function Run($rootScope) {
  $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams, fromState, fromParams) {
      });

  $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
      });

  $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams) {
      });
}
