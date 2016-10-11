'use strict';

module.exports = 'app.core';

angular.module('app.core', [
  require('./directives/my-directive/my-directive'),
  require('./directives/my-directive2/my-directive2'),
  require('./services/greeting/greeting'),
  require('./services/token-injector/token-injector'),
  require('./services/user/user'),
  require('./components/header/header.component'),
  require('./components/footer/footer.component')
]);
