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

  var alex = { name: 'Alex', age: 28, brother: {name:'Slava', political: 'false'}, serteficated: true  };
  var second = { name: 'Second'};
  var e = angular.extend({}, alex, second);
  console.log(e);

  var m = angular.merge({}, alex, second);
  console.log(m);


  init();

  function init() {

  }

  function greeting(name) {
    console.log('Hello ' + name);
  }

}
