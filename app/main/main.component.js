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

  $ctrl.user1 = user.$find(1);

  var anton = user.$build({ firstName: 'Anton', lastName: 'Sviderskiy', age: 30 });
  anton.$save();

  var testUser = user.$search({ firstName: 'Anton' });
  console.log(testUser);

  function init() {
  }

  function destroy() {
  }

}
