/*
使用给定的参数对句子执行一次查找和替换，然后返回新句子。

第一个参数是将要对其执行查找和替换的句子。

第二个参数是将被替换掉的单词（替换前的单词）。

第三个参数用于替换第二个参数（替换后的单词）。

注意：替换时保持原单词的大小写。
例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 */

function myReplace(str, before, after) {
    if (before.length === 0 || after.length === 0) {
        return str;
    }
    var reg = new RegExp(before, "g");
    var r;
    if (before[0] <= 'Z' && before[0] >= 'A' &&
        after[0] <= 'z' && after[0] >= 'a') {
        var change = after[0].charCodeAt() - 32;
        var begin = String.fromCharCode(change);
        r = begin + after.substr(1);
    } else {
        r = after;
    }

    return str.replace(reg, r);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
