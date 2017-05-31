/*
求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。
例如，2 是质数，因为它只能被 1 和 2 整除。
1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。
 */

function isPrime(checkNum) {
  if(checkNum == 1) {
    return false;
  }
  for(var i = 2; i <= Math.sqrt(checkNum); i++) {
    if(checkNum % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var result = 0;
  for(var i = 1; i <= num; i++) {
    if(isPrime(i)) {
      result += i;
    }
  }
  return result;
}

sumPrimes(10);
