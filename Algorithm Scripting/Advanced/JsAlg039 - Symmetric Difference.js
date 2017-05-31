/*
创建一个函数，接受两个或多个数组，
返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 
而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一
的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 
(如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与
新集合的对等差分集合 
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function symDiff(a, b) {
  var result = [];
  for(var i = 0; i < a.length; i++) {
    if(b.indexOf(a[i]) == -1) {
      result.push(a[i]);
    }
  }
  for(var j = 0; j < b.length; j++) {
    if(a.indexOf(b[j]) == -1) {
      result.push(b[j]);
    }
  }
  var real = [];
  for(var k = 0; k < result.length; k++) {
    if(real.indexOf(result[k]) == -1) {
      real.push(result[k]);
    }
  }
  return real;
}

function sym(args) {
  if(arguments.length <= 1) {
    return args;
  }
  var result = symDiff(arguments[0], arguments[1]);
  for(var i = 2; i < arguments.length; i++) {
    result = symDiff(result, arguments[i]);
  }
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
