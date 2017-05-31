/*
写一个 function，它浏览数组（第一个参数）并
返回数组中第一个通过某种方法（第二个参数）验证的元素。
 */

function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
