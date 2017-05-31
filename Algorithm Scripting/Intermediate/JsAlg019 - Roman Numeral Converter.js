/*
将给定的数字转换成罗马数字。

所有返回的 罗马数字 都应该是大写形式。
 */

var map = [
  ["","I","II","III","IV","V","VI","VII","VIII","IX"],
  ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
  ["","M","MM","MMM"]
];

function convert(num) {
  var result = "";
  result += map[3][parseInt(num / 1000) % 10];
  result += map[2][parseInt(num / 100) % 10];
  result += map[1][parseInt(num / 10) % 10];
  result += map[0][parseInt(num / 1) % 10];

  return result;
}

convert(36);
