/*
翻转字符串

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，
最后把数组转化成字符串。

你的结果必须得是一个字符串
 */

function reverseString(str) {
  var arr = str.split("");
  Array.reverse(arr);
  return arr.join("");
}

reverseString("hello");
