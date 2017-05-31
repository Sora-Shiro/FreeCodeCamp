/*
创建一个计算两个参数之和的 function。
如果只有一个参数，则返回一个 function，
该 function 请求一个参数然后返回求和的结果。

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。

调用这个有一个参数的返回的 function，返回求和的结果：

var sumTwoAnd = add(2);

sumTwoAnd(3) 返回 5。

如果两个参数都不是有效的数字，则返回 undefined。
 */

function add() {
  if(arguments.length == 1) {
    if(typeof arguments[0] == 'number'){
      var pre = arguments[0];
      return function(num) {
        if(typeof num == 'number'){
          return pre + num;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
  if(arguments.length == 2) {
    if(typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  }
}

add(2,3);
