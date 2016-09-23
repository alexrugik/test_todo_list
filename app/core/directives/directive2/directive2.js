'use strict';

module.exports = 'app.core.directives.directive2';

angular.module('app.core.directives.directive2', [])
    .directive('directive2', Directive2);

Directive2.$inject = [];

function Directive2() {
  return  {
    templateUrl: 'app/core/directives/directive2/directive2.template.html',
    scope: false,
    restrict: 'E',
    controller: function ($scope, $element) {
      $scope.$ctrl.names = ['Alex', 'Dmitriy', 'Vladimir', 'Oleg'];
    },
    compile: function (elementm, attrs) {
      return {
        pre: function (scope, element, attributes, controller, transcludeFn) {
        },
        post: function (scope, element, attributes, controller, transcludeFn) {

        }
      }
    }
  }
}
