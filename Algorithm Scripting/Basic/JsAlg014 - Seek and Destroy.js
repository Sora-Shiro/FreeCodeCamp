/*
金克斯的迫击炮！

实现一个摧毁(destroyer)函数，
第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */

function destroyer(arr) {
  var array = arguments[0];
  var args = arguments.length - 1;
  var result = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < arguments.length; j++) {
      if(array[i] === arguments[j]) {
        break;
      }
    }
    if(j >= arguments.length) {
      result.push(array[i]);
    }
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
