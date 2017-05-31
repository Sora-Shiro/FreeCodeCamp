/*
返回一个数组，其内容是把原数组中对应元素的平均海拔
转换成其对应的轨道周期.

原数组中会包含格式化的对象内容，像这样
 {name: 'name', avgAlt: avgAlt}.

求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.

地球半径是 6367.4447 kilometers, 
地球的GM值是 398600.4418, 圆周率为Math.PI
 */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var i = 0; i < arr.length; i++) {
    var r = (arr[i].avgAlt + earthRadius);
    var t = r * 2 * Math.PI * Math.sqrt(r / GM);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = Math.round(t); 
  }
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
