/*
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的
最小公倍数。
 */

function smallestCommon(min, max) {
  var saveMin = min;
  var saveMax = max;
  var a = max % min;
  while(a !== 0) {
    max = min;
    min = a;
    a = max % min;
  }
  return saveMin*saveMax/min;
}

function smallestCommons(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var result = min;
  for(var i = min+1; i <= max; i++) {
    result = smallestCommon(i, result);
  }
  return result;
}

smallestCommons([1,5]);
