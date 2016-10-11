'use strict';

require('../assets/assets.module');

angular.module('app', [
  'ngMockE2E',
  'ui.router',
  'ngResource',
  'restmod',
  require('./app.config'),
  require('./app.route'),
  require('./app.run'),
  require('./auth/auth.module'),
  require('./app.http-backend'),
  require('./core/core.module'),
  require('./main/main.component'),
  require('./view1/view1.component'),
  require('./view2/view2.component')
]);
