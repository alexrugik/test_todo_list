'use strict';

module.exports = 'app.config';

angular.module('app.config', [])
    .config(Config);

Config.$inject = [
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider'
];

function Config($urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/main');

  $httpProvider.interceptors.push('tokenInjector');

}
