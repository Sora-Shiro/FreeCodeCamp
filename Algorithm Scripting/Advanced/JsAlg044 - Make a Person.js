/*
用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), 
getFullName(), setFirstName(first), 
setLastName(last), and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互.
 */

var Person = function(firstAndLast) {
  var s = firstAndLast.split(" ");
  var firstName = s[0];
  var lastName = s[1];
  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.setFullName = function(firstAndLast) {
    s = firstAndLast.split(" ");
    firstName = s[0];
    lastName = s[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
