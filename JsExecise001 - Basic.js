var Car = function(wheels, seats, engines) {
  var id = "privateId-#1";
  this.getId = function() {
    return id;
  }
  this.setId = function(set) {
    id = set;
  }
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
var myCar = new Car(1,2,3);


var oldArray = [1,2,3,4,5];
var newArray = oldArray;
newArray = oldArray.map(function(val) {
  return val + 3;
});


var array = [4,5,6,7,8];
var singleVal = 0;
singleVal = array.reduce(function(pre, cur) {
  return pre + cur;
}, 0);


var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val) {
  return val < 6;
});


var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return b - a;
});


var array = [1,2,3,4,5,6,7];
var newArray = [];
newArray = array.reverse();


var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);


var string = "Split me into an array";
var array = [];
array = string.split(" ");

var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join(" ");
