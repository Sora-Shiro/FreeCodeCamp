/*
如果给定的字符串是回文，返回true，反之，返回false。

如果一个字符串忽略标点符号、大小写和空格，
正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

注意你需要去掉字符串多余的标点符号和空格，
然后把字符串转化成小写来验证此字符串是否为回文。

函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。
 */

function palindrome(str) {
  var lowStr = str.toLowerCase();
  var strArr = lowStr.split("");
  var temp = [];
  var reg = /[A-Za-z0-9]/;
  strArr.map(function(val) {
    if(reg.test(val)) {
        temp.push(val);
    }
  });

  var i = 0;
  var j = temp.length-1;
  while(i < j) {
    if(temp[i] != temp[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

palindrome("eye");
