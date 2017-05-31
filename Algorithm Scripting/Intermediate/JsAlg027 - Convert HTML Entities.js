/*
将字符串中的字符 &、<、>、" （双引号）, 
以及 ' （单引号）转换为它们对应的 HTML 实体。
 */

function convert(str) {
  var result = str.replace(/&/g, "&amp;");
  result = result.replace(/</g, "&lt;");
  result = result.replace(/>/g, "&gt;");
  result = result.replace(/"/g, "&quot;");
  result = result.replace(/'/g, "&apos;");
  return result;
}

convert("Dolce & Gabbana");

