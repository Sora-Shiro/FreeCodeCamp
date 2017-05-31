/*
找到提供的句子中最长的单词，
并计算它的长度。

函数的返回值应该是一个数字。
 */

function findLongestWord(str) {
  var arr = str.split(" ");
  var result = 0;
  arr.map(function(val) {
    if(val.length > result) {
      result = val.length;
    }
  });
  return result;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
