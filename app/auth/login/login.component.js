'use strict';

module.exports = 'app.auth.login';

angular
    .module('app.auth.login', [])
    .component('login', {
      templateUrl: 'app/auth/login/login.template.html',
      controller: Login,
      controllerAs: '$ctrl'
    });

Login.$inject = [];

function Login() {
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
    if (!$ctrl.user.username && !$ctrl.user.password) {
      return;
    }
  }

  function showError(state) {
    return state;
  }

}

