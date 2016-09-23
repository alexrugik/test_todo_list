'use strict';

module.exports = 'app.view1';

angular.module('app.view1', [])
    .component('view1', {
      templateUrl: 'app/view1/view1.template.html',
      controller: View1Controller,
      controllerAs: '$ctrl'
    })

View1Controller.$inject = [];

function View1Controller() {
  var $ctrl = this;

  $ctrl.name = 'View1Controller created by Alex';

}
