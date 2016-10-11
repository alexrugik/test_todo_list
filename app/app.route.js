'use strict';

module.exports = 'app.route';

angular.module('app.route', [])
    .config(Route);

Route.$inject = ['$stateProvider'];

function Route($stateProvider) {
  $stateProvider
      .state('app', {
        abstract: true,
        views: {
          header: { template: '<header></header>' },
          footer: { template: '<footer></footer>' },
          '': { template: '<div ui-view></div>' }
        }
      })
      .state('main', {
        url: '/main',
        parent: 'app',
        template: '<main></main>'
      })
      .state('view1', {
        url: '/view1',
        parent: 'app',
        template: '<view1></view1>'
      })
      .state('view2', {
        url: '/view2',
        parent: 'app',
        template: '<view2></view2>'
      })
}

