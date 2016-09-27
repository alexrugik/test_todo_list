module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
      templateUrl: "app/main/main.template.html",
      controller: MainController,
      controllerAs: '$ctrl'
    });

MainController.$inject = ['$state', '$rootScope', '$timeout', '$interval', 'User', '$http'];

function MainController($state, $rootScope, $timeout, $interval, User, $http) {
  var $ctrl = this;

  $ctrl.$onInit = init;
  $ctrl.$onDestroy = destroy;

  function init() {
  }

  function destroy() {
  }

}
