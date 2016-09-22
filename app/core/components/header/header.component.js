module.exports = 'app.core.components.header';

angular.module('app.core.components.header', [])
    .component('header', {
      templateUrl: 'app/core/components/header/header.template.html',
      controller: HeaderController
    });

HeaderController.$inject = ['$state'];

function HeaderController($state) {
  var $ctrl = this;
  console.log($state);
  $ctrl.currentNavItem = $state.current.name;

  init();

  function init() {
  }

}
