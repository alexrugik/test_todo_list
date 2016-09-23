'use strict';

module.exports = 'app.core';

angular.module('app.core', [
  require('./directives/directive1/directive1'),
  require('./directives/directive2/directive2'),
  require('./services/greeting'),
  require('./components/header/header.component'),
  require('./components/footer/footer.component')
]);
