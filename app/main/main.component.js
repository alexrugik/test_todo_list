module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
      templateUrl: "app/main/main.template.html",
      controller: MainController,
      controllerAs: '$ctrl'
    });

MainController.$inject = ['$state', '$rootScope', '$timeout', '$interval', 'user', '$http'];

function MainController($state, $rootScope, $timeout, $interval, user, $http) {
  var $ctrl = this;

  $ctrl.$onInit = init;
  $ctrl.$onDestroy = destroy;

  $ctrl.user = user;

  var currentUser = $ctrl.user.$find(1);


  function init() {
  }

  function destroy() {
  }

}
