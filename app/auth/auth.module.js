'use strict';

module.exports = 'app.auth';

angular.module('app.auth', [
  require('./login/login.component'),
  require('./registration/registration.component'),
  require('./auth.route')
]);
