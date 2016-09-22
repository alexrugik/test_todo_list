angular.module('app.core.directives.directive1', [])
    .directive('directive1', Directive1);

Directive1.$inject = [];

function Directive1() {
  return  {
    templateUrl: 'app/core/directives/directive1/directive1.template.html',
    scope: false,
    restrict: 'E',
    controller: function ($scope, $element) {
    },
    compile: function (elementm, attrs) {
      return {
        pre: function (scope, element, attributes, controller, transcludeFn) {
        },
        post: function (scope, element, attributes, controller, transcludeFn) {
          scope.$ctrl.name = element.find('input').attr('name');
        }
      }
    }
  }
}
