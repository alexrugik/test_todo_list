'use strict';

module.exports = 'app.view2';

angular.module('app.view2', [])
    .component('view2', {
      templateUrl: 'app/view2/view2.template.html',
      controller: View2Controller,
      controllerAs: '$ctrl'
    });

View2Controller.$inject = ['greetingService'];

function View2Controller(greetingService) {
  var $ctrl = this;

  $ctrl.name = 'View2 Name';

  init();

  function init() {
    greetingService.greeting($ctrl.name);
  }

}
