/*
比较两个数组，然后返回一个新数组，
该数组的元素为两个给定数组中所有独有的数组元素。
换言之，返回两个数组的差异。
 */

function diff(arr1, arr2) {
  var newArr = [];
  arr1.sort();
  arr2.sort();

  var i = 0;
  var j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] === arr2[j]) {
      i++;
      j++;
    } else {
      if(arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
  }
  while(i < arr1.length){
    newArr.push(arr1[i++]);
  }
  while(j < arr2.length){
    newArr.push(arr2[j++]);
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
