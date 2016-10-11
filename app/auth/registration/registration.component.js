'use strict';

module.exports = 'app.auth.registration';

angular.module('app.auth.registration', [])
    .component('registration', {
      templateUrl: 'app/auth/registration/registration.template.html',
      controller: Registration,
      controllerAs: '$ctrl'
    });

Registration.$inject = ['$timeout'];

function Registration($timeout) {
  var $ctrl = this;

  $ctrl.user = {
    username: '',
    email: '',
    password: ''
  };
  $ctrl.showError = false;

  $ctrl.$onInit = init;
  $ctrl.$onDestroy = destroy;
  $ctrl.registration = registration;

  function init() {

  }

  function destroy() {

  }

  function registration() {
    if (!checkConfirmPassword()) {
      $ctrl.responseErrorText = 'Password does not match the confirm password';
      $ctrl.showError = true;
      $timeout(function () {
        $ctrl.showError = false;
      }, 3000);
      return;
    }
/*    User.save({ action: 'register' }, $ctrl.user).$promise.then(
        function (response) {
          console.log(response);
          Token.setToken(response.result.accessToken.token);
          $state.go('main');
        },
        function (error) {
          console.log(error);
          $ctrl.responseErrorText = 'Error: ' + error.data.result[0].message;
          $ctrl.showError = true;
          $timeout(function () {
            $ctrl.showError = false;
          }, 3000);
        }
    )*/
  }

  function checkConfirmPassword() {
    if ($ctrl.user.password === $ctrl.passwordConfirm) {
      return true;
    }
  }

}

