module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
      templateUrl: "app/main/main.template.html",
      controller: MainController,
      controllerAs: '$ctrl'
    });

MainController.$inject = [];

function MainController() {
  var $ctrl = this;

  $ctrl.name = 'Main';
  $ctrl.greeting = greeting;

  init();

  function init() {

  }

  function greeting(name) {
    console.log('Hello ' + name);
  }

}
