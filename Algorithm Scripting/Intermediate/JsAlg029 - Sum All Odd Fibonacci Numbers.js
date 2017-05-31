/*
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，
随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中
所有小于4的奇数是 1、1、3。

提示：此题不能用递归来实现斐波纳契数列。
因为当num较大时，内存会溢出，推荐用数组来实现。
 */


function sumFibs(num) {
  var preA = 1;
  var preB = 1;
  var result = 0;
  if(num == 1) {
    return 1;
  }
  result = 2;
  var temp = preA + preB;
  while(temp <= num) {
    if((temp & 1) == 1) {
      result += temp;
    }
    preA = preB;
    preB = temp;
    temp = preA + preB;
  } 
  return result;
}

sumFibs(4);
