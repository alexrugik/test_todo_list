'use strict';

module.exports = 'app.httpBackend';

angular.module('app.httpBackend', [])
    .run(HttpBackend);

HttpBackend.$inject = ['$httpBackend'];

function HttpBackend($httpBackend) {

  var users = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Dmitriy' }
  ];

  $httpBackend.whenRoute('GET', '/api/users/')
      .respond(function (method, url, data, headers, params) {
        return [200, users];
      });

  $httpBackend.whenRoute('GET', '/api/users/:id')
      .respond(function (method, url, data, headers, params) {
        var id = parseInt(params.id);
        return [200, users[id]];
      });

  $httpBackend.whenRoute('POST', 'api/users')
      .repond(function (method, url, data, headers, params) {

      })

  $httpBackend.when('GET', /.*/).passThrough();
  $httpBackend.when('POST', /.*/).passThrough();
  $httpBackend.when('PUT', /.*/).passThrough();
  $httpBackend.when('PATCH', /.*/).passThrough();
  $httpBackend.when('DELETE', /.*/).passThrough();
  $httpBackend.when('OPTIONS', /.*/).passThrough();
}
