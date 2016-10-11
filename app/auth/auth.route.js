'use strict';

module.exports = 'app.auth.route';

angular.module('app.auth.route', [])
    .config(Route);

Route.$inject = ['$stateProvider'];

function Route($stateProvider) {
  $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        views: {
          'header': { template: '' },
          'footer': { template: '' },
          '': { template: '<div ui-view></div>' }
        }
      })
      .state('login', {
        url: '^/login',
        parent: 'auth',
        template: '<login></login>'
      })
      .state('registration', {
        url: '^/registration',
        parent: 'auth',
        template: '<registration></registration>'
      });
}

