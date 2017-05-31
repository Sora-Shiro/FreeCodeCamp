/*
传入二进制字符串，翻译成英语句子并返回。

二进制字符串是以空格分隔的。
 */

function binaryAgent(str) {
  var result = "";
  for(var i = 0; i < str.length; i+=9) {
    var temp = str.substr(i, 8);
    var num = parseInt(temp, 2);
    var c = String.fromCharCode(num);
    result += c;
  }
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
