/*
重要的事情说3遍！

重复一个指定的字符串 num次，
如果num是一个负数则返回一个空字符串。
 */

function repeat(str, num) {
  var result = "";
  while(num-- > 0) {
    result += str;
  }
  return result;
}

repeat("abc", 3);
