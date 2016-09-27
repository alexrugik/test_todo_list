'use strict';

module.exports = 'app.core.services.user';

angular.module('app.core.services.user', [])
    .factory('User', User);

User.$inject = ['restmod'];

function User(restmod) {
  return restmod.model('/api/users');
}
