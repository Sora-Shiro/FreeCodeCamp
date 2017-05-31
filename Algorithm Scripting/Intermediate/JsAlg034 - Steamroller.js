/*
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
 */
function steamroller(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = [];
        if (Array.isArray(arr[i])) {
          temp = steamroller(arr[i]);
        } else {
          temp.push(arr[i]);
        }
        while(temp.length > 0) {
          result.push(temp.shift());
        }
    }
    return result;
}

steamroller([1, [2],
    [3, [
        [4]
    ]]
]);
