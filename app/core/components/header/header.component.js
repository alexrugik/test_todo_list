module.exports = 'app.core.components.header';

angular.module('app.core.components.header', [])
    .component('header', {
      templateUrl: 'app/core/components/header/header.template.html',
      controller: HeaderController
    });

HeaderController.$inject = ['$state'];

function HeaderController($state) {
  var $ctrl = this;

  $ctrl.isActive = isActive;


  init();

  function init() {

  }

  function isActive(state) {
    if (state === $state.current.name) {
      return 'active';
    }
    return false;
  }

}
