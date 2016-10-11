'use strict';

module.exports = 'app.config';

angular.module('app.config', [])
    .config(Config);

Config.$inject = [
  '$urlRouterProvider',
  '$locationProvider'
];

function Config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');

}
