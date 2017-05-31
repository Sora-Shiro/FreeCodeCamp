/*
DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，
然后将结果作为第二个数组返回。

Base pairs（碱基对） 是一对 AT 和 CG，
为给定的字母匹配缺失的碱基。

在每一个数组中将给定的字母作为第一个碱基返回。

例如，对于输入的 GCG，相应地返回 
[["G", "C"], ["C","G"],["G", "C"]]

字母和与之配对的字母在一个数组内，
然后所有数组再被组织起来封装进一个数组。
 */

var map = {
  "A" : "T",
  "T" : "A",
  "C" : "G",
  "G" : "C"
};

function pair(str) {
  var result = [];
  for(var i = 0; i < str.length; i++) {
    var temp = [];
    temp.push(str[i]);
    temp.push(map[str[i]]);
    result.push(temp);
  }

  return result;
}

pair("GCG");
