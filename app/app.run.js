'use strict';

module.exports = 'app.run';

angular.module('app.run', [])
    .run(Run)

Run.$inject = ['$rootScope'];

function Run($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event) {
    console.log('start change');
    console.log(event);
  });

  $rootScope.$on('$stateChangeError', function (event) {
    console.log('error state change');
    console.log(event);
  });

}
