/*
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。
 */

function fearNotLetter(str) {
  if(str.length === 0) {
    return str;
  }
  var result = "";
  var begin = str[0];
  var end = str[str.length-1];
  var originI = 0;
  for(var c = begin; c < end; c = String.fromCharCode(c.charCodeAt()+1)) {
    if(str[originI] !== c) {
      result += c;
    } else {
      originI++;
    }
  }
  return result.length === 0 ? undefined : result;
}

fearNotLetter("abce");
