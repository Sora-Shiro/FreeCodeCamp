/*
蛤蟆可以吃队友，也可以吃对手。

如果数组第一个字符串元素包含了第二个字符串元素的所有字符，
函数返回true。

举例，["hello", "Hello"]应该返回true，
因为在忽略大小写的情况下，
第二个字符串的所有字符都可以在第一个字符串找到。

["hello", "hey"]应该返回false，
因为字符串"hello"并不包含字符"y"。

["Alien", "line"]应该返回true，
因为"line"中所有字符都可以在"Alien"找到。
 */

function mutation(arr) {
  var firstStr = arr[0];
  var secondStr = arr[1];
  firstStr = firstStr.toLowerCase();
  secondStr = secondStr.toLowerCase();

  var firstBit = 0;
  var secondBit = 0;
  for(var i = 0; i < firstStr.length; i++) {
    var bit1 = 1 << firstStr[i].charCodeAt();
    firstBit |= bit1;
  }
  for(var j = 0; j < secondStr.length; j++) {
    var bit2 = 1 << secondStr[j].charCodeAt();
    secondBit |= bit2;
  }

  var diffBit = firstBit ^ secondBit;

  return (diffBit&firstBit) == diffBit;
}

mutation(["hello", "hey"]);

