require('../assets/assets.module');

angular.module('app', [
  'ui.router',
  require('./core/core.module'),
  require('./main/main.component'),
  require('./view1/view1.component'),
  require('./view2/view2.component')
])
    .config(require('./app.config'))
    .run(require('./app.run'));

