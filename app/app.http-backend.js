'use strict';
var Users = require('./core/services/user/models/users');
var User = require('./core/services/user/models/user');

module.exports = 'app.httpBackend';

angular.module('app.httpBackend', [])
    .run(HttpBackend);

HttpBackend.$inject = ['$httpBackend'];

function HttpBackend($httpBackend) {
  var listOfUsers = users.getUsers();

  $httpBackend.when('GET', '/api/users/')
      .respond(function (method, url, data, headers, params) {
        return [200, listOfUsers];
      });

  $httpBackend.when('GET', /^\/api\/users\/(.+)/, undefined, undefined, ['id'])
      .respond(function (method, url, data, headers, params) {
        return [200, listOfUsers[parseInt(params.id)]];
      });

  $httpBackend.when('GET', /^\/api\/users\?([a-zA-Z]+)\=(.+)$/)
      .respond(function (method, url, data, headers, params) {
        return [200, __.filter(listOfUsers, params)];
      });

  $httpBackend.when('POST', '/api/users')
      .respond(function (method, url, data, headers, params) {
        if (!data) {
          return [500, 'error'];
        }
        var user = new User();

        if (data.firstName) {
          user.setFirstName = data.firstName;
        }
        if (data.lastName) {
          user.setLastName = data.lastName;
        }
        if (data.age) {
          user.setAge = data.age;
        }
        listOfUsers.push(user);
        return [200, { result: 'ok' }]
      });

  $httpBackend.when('GET', /.*/).passThrough();
  $httpBackend.when('POST', /.*/).passThrough();
  $httpBackend.when('PUT', /.*/).passThrough();
  $httpBackend.when('PATCH', /.*/).passThrough();
  $httpBackend.when('DELETE', /.*/).passThrough();
  $httpBackend.when('OPTIONS', /.*/).passThrough();
}

// templorary fake data
var users = new Users;

var alex = new User();
alex.setFirstName('Alex');
alex.setLastName('Ruzhinskiy');
alex.setAge(27);
alex.setCounty('Ukraine');
alex.getLocation('11000&1090000');

var dmitriy = new User();
dmitriy.setFirstName('Dmitriy');
dmitriy.setLastName('Gotra');
dmitriy.setAge(25);
dmitriy.setCounty('Slovakia');
dmitriy.getLocation('11000&1090000');

var slava = new User();
slava.setFirstName('Slava');
slava.setLastName('Ruzhinskiy');
slava.setAge(23);
slava.setCounty('Ukraine');
slava.getLocation('11000&1090000');

var oleg = new User();
oleg.setFirstName('Oleg');
oleg.setLastName('Kovalenko');
oleg.setAge(40);
oleg.setCounty('Ukraine');
oleg.getLocation('11000&1090000');

var oleg2 = new User();
oleg2.setFirstName('Oleg');
oleg2.setLastName('Kamus');
oleg2.setAge(34);
oleg2.setCounty('Ukraine');
oleg2.getLocation('11000&1090000');

var vasya = new User();
vasya.setFirstName('Vasya');
vasya.setLastName('Andro');
vasya.setAge(18);
vasya.setCounty('USA');
vasya.getLocation('11000&1090000');

var vladimir = new User();
vladimir.setFirstName('Vladimir');
vladimir.setLastName('Melnik');
vladimir.setAge(26);
vladimir.setCounty('Ukraine');
vladimir.getLocation('11000&1090000');

users.addUser(alex);
users.addUser(slava);
users.addUser(oleg);
users.addUser(oleg2);
users.addUser(vasya);
users.addUser(vladimir);
