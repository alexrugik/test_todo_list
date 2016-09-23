'use strict';

module.exports = 'app.core.directives.myDirective2';

angular.module('app.core.directives.myDirective2', [])
    .directive('ravMyDirective2', MyDirective2);

MyDirective2.$inject = [];

function MyDirective2() {
  return {
    templateUrl: 'app/core/directives/my-directive2/my-directive2.template.html',
    restrict: 'E',
    scope: {},
    transclude: true,
    link: function (scope, element, attrs, controller, transcludeFn) {
    }
  }
}
