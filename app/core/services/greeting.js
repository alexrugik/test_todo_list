module.exports = 'app.core.services.greeting';

angular.module('app.core.services.greeting', [])
  .service('greetingService', GreetingService);

GreetingService.$inject = [];

function GreetingService() {
  this.greeting = function (name) {
    console.log('Service says: Hello to you dear ' + name);
  }
}
