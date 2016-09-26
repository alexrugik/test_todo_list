'use strict';

module.exports = 'app.core.services.user';

angular.module('app.core.services.user', [])
    .factory('user', user);

user.$inject = ['restmod'];

function user(restmod) {
  return restmod.model('/api/users');
}
