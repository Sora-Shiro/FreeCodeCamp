/*
依照一个存着新进货物的二维数组，
更新存着现有库存(在 arr1 中)的二维数组. 
如果货物已存在则更新数量 . 
如果没有对应货物则把其加入到数组中，
更新最新的数量. 返回当前的库存数组，
且按货物名称的字母顺序排列.
 */

function updateInventory(arr1, arr2) {
    var store = {};
    for(var i = 0; i < arr1.length; i++) {
        store[arr1[i][1]] = arr1[i][0];
    }
    for(var j = 0; j < arr2.length; j++) {
        if(store.hasOwnProperty(arr2[j][1])) {
            store[arr2[j][1]] += arr2[j][0];
        } else {
            store[arr2[j][1]] = arr2[j][0];
        }
    }
    var result = [];
    var key = Object.keys(store);
    key.sort();
    key.map(function(val) {
        result.push([store[val], val]);
    });
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
