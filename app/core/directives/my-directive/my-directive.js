'use strict';

module.exports = 'app.core.directives.myDirective';

angular.module('app.core.directives.myDirective', [])
    .directive('ravMyDirective', MyDirective);

MyDirective.$inject = [];

function MyDirective() {
  return {
    templateUrl: 'app/core/directives/my-directive/my-directive.template.html',
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    link: function (scope, element, attrs, controller, transcludeFn) {
    }
  }
}
