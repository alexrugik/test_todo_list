'use strict';

module.exports = 'app.auth.login';

angular
    .module('app.auth.login', [])
    .component('login', {
      templateUrl: 'app/auth/login/login.template.html',
      controller: Login,
      controllerAs: '$ctrl',
      bindings: {
        obj: '<'
      }
    });

Login.$inject = ['Token', 'User', '$state', '$timeout'];

function Login(Token, User, $state, $timeout) {
  var $ctrl = this;

  $ctrl.user = {
    username: '',
    password: ''
  };
  $ctrl.showError = false;

  $ctrl.$onInit = init;
  $ctrl.$onDestroy = destroy;
  $ctrl.login = login;

  function init() {
  }

  function destroy() {

  }

  function login() {
    if ($ctrl.user.username && $ctrl.user.password) {
      User.save({ action: 'login' }, $ctrl.user)
          .$promise.then(
          function (response) {
            Token.setToken(response.result.token);
            $state.go('main');
          },
          function (error) {
            console.log(error);
            $ctrl.showError = true;
            $ctrl.responseErrorText = 'Error: ' +  error.data.result[0].message;
            $timeout(function () {
              $ctrl.showError = false;
            }, 3000);
          }
      );
    }
  }

  function showError(state) {
    return state;
  }


}

