'use strict';

module.exports = User;

User.id = 0;

function User() {
  var id = User.id++;
  var firstName;
  var lastName;
  var age;
  var location;
  var country;

  this.getId = getId;

  this.getFirstName = getFirstName;
  this.setFirstName = setFirstName;

  this.getLastName = getLastName;
  this.setLastName = setLastName;

  this.getAge = getAge;
  this.setAge = setAge;

  this.getLocation = getLocation;
  this.setLocation = setLocation;

  this.getCounty = getCountry;
  this.setCounty = setCountry;

  function getId() {
    return id;
  }

  function getFirstName() {
    return firstName;
  }

  function setFirstName(name) {
    firstName = name;
  }

  function getLastName() {
    return lastName;
  }

  function setLastName(name) {
    lastName = name
  }

  function getAge() {
    return age;
  }

  function setAge(years) {
    age = years;
  }

  function getLocation() {
    return location;
  }

  function setLocation(loc) {
    location = loc;
  }

  function getCountry() {
    return country;
  }

  function setCountry(land) {
    country = land;
  }
}
