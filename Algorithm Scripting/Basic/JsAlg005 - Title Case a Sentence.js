/*
确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。
 */

function titleCase(str) {
  var ifSpace = true;
  var result = "";
  for(var i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      ifSpace = true;
      result += ' ';
      continue;
    } else {
      if(ifSpace) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }
      ifSpace = false;
    }
  }
  return result;
}

titleCase("I'm a little tea pot");
