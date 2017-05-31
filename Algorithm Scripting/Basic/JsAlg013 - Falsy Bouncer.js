/*
真假美猴王！

删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
 */

/*jshint esversion: 6 */
function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false ||
            arr[i] === null ||
            arr[i] === 0 ||
            arr[i] === "" ||
            arr[i] === undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

bouncer([NaN, 1]);
