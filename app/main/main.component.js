module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
      templateUrl: "app/main/main.template.html",
      controller: MainController,
      controllerAs: '$ctrl'
    });

MainController.$inject = ['$state'];

function MainController($state) {
  var $ctrl = this;

  $ctrl.name = 'Main';
  $ctrl.greeting = greeting;
  $ctrl.directiveName = 'This a test directive: type E, one time bind';
  $ctrl.users = getUsers();

  init();

  function init() {

  }

  function greeting(name) {
    console.log('Hello ' + name);
  }

  function getUsers() {
    return {
      alex: {
        name: 'Alex Ruzhinskiy',
        address: 'Irpin, Ostrovskogo7'
      },
      dmitriy: {
        name: 'Dmitriy Gotra',
        address: 'Bratislava, Stravska 27'
      }
    }
  }

}
