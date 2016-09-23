'use strict';

module.exports = 'app.run';

angular.module('app.run', [])
    .run(Run)

Run.$inject = ['$rootScope'];

function Run($rootScope) {
  $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams, fromState, fromParams) {
        console.log('success change');
        console.log(event);
      });

  $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        console.log('start change');
        console.log(event);
      });

  $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams) {
        console.log('error state change');
        console.log(event);
      });
}
