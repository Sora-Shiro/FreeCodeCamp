/*
检查一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。
 */

function confirmEnding(str, target) {
  var i = str.length - 1;
  var j = target.length - 1;
  while(i >= 0 && j >= 0) {
    if(str[i] != target[j]) {
      return false;
    }
    i--;
    j--;
  }
  return j < 0;
}

confirmEnding("Bastian", "n");
