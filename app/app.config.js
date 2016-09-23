'use strict';

module.exports = Config;

Config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('abstract', {
        url: '',
        abstract: true,
        views: {
          'header': { template: '<header></header>' },
          'footer': { template: '<footer></footer>' },
          '': { template: '<div ui-view="main"></div>' }
        }
      })
      .state('main', {
        url: '/',
        parent: 'abstract',
        views: { 'main': { template: '<main></main>' } }
      })
      .state('view1', {
        url: '/view1',
        parent: 'abstract',
        views: { 'main': { template: '<view1></view1>' } }
      })
      .state('view2', {
        url: '/view2',
        parent: 'abstract',
        views: { 'main': { template: '<view2></view2>' } }
      })
      .state('otherwise', {
        url: '/',
      })
}
