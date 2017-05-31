/*
猴子吃香蕉可是掰成好几段来吃哦！

把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 */

function chunk(arr, size) {
  var result = [];
  for(var i = 0; i < arr.length; i+=size) {
    var temp = [];
    for(var j = i; j < i+size && j < arr.length; j++) {
      temp.push(arr[j]);
    }
    result.push(temp);
  }
  return result;
}

chunk(["a", "b", "c", "d"], 2);
