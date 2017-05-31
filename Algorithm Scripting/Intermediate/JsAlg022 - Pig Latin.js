/*
把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛
（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 */

function translate(str) {
    var j = 0;
    while (j < str.length &&
        str[j] !== 'a' &&
        str[j] !== 'e' &&
        str[j] !== 'i' &&
        str[j] !== 'o' &&
        str[j ] !== 'u') {
        j++;
    }
    if (j === str.length) {
        return str;
    }
    if (j === 0) {
        return str + "way";
    }
    var pre = str.substr(0, j);
    var aft = str.substr(j);
    var result = aft + pre + "ay";
    return result;
}

translate("california");
