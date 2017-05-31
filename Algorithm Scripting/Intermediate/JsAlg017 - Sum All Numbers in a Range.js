/*
我们会传递给你一个包含两个数字的数组。
返回这两个数字和它们之间所有数字的和。

最小的数字并非总在最前面。
 */

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var result = 0;
  for(var i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);