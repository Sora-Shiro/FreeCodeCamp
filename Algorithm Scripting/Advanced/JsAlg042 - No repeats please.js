/*
把一个字符串中的字符重新排列生成新的字符串，
返回新生成的字符串里没有连续重复字符的字符串个数.
连续重复只以单个字符为准

例如, aab 应该返回 2 因为它总共有6中排列 
(aab, aab, aba, aba, baa, baa), 
但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
 */

function nextStr(now, remain, t) {
    if (remain.length === 0) {
        t.push(now);
        return;
    }
    for (var j = 0; j < remain.length; j++) {
        if (now[now.length - 1] == remain[j]) {
            continue;
        }
        now.push(remain[j]);
        var out = remain.splice(j, 1);
        nextStr(now, remain, t);
        remain.splice(j, 0, out[0]);
        now.pop();
    }
}

function permAlone(str) {
    var arr = [];
    var totalArr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (var j = 0; j < arr.length; j++) {
        var now = [];
        now.push(arr[j]);
        var out = arr.splice(j, 1);
        nextStr(now, arr, totalArr);
        arr.splice(j, 0, out[0]);
    }
    return totalArr.length;
}

permAlone('aabb');
