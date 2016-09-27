'use strict';

module.exports = Users;

function Users() {
  var users = [];
  this.getUsers = getUsers;
  this.addUser = addUser;

  function getUsers() {
    return users;
  }

  function addUser(user) {
    users.push(user);
  }
}
