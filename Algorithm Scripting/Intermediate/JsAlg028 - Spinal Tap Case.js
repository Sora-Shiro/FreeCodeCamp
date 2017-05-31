/*
将字符串转换为 spinal case。
Spinal case 是 all-lowercase-words-joined-by-dashes 
这种形式的，也就是以连字符连接所有小写单词。
 */

function spinalCase(str) {
  var isUpper = false;
  var temp = "";
  var result = "";
  for(var i = 0; i < str.length; i++) {
    if(str[i] <= 'Z' && str[i] >= 'A') {
      result += temp;
      if(result.length !== 0) {
        result += '-';
      }
      temp = String.fromCharCode(str[i].charCodeAt()+32);
    } else if(str[i] <= 'z' && str[i] >= 'a') {
      if(i-1 >= 1 && (str[i-1] == ' ' || str[i-1] == '-')) {
        result += temp;
        result += '-';
        temp = "";
      }
      temp += str[i];
    }
  }
  result += temp;
  return result;
}

spinalCase('This Is Spinal Tap');
