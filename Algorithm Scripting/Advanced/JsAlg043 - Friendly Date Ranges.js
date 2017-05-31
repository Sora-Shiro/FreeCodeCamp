/*
让日期区间更友好！

把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

易读格式应该是用月份名称代替月份数字，
用序数词代替数字来表示天 (1st 代替 1).

记住不要显示那些可以被推测出来的信息: 
如果一个日期区间里结束日期与开始日期相差小于一年，
则结束日期就不用写年份了。月份开始和结束日期如果在同一个月，
则结束日期月份就不用写了。

另外, 如果开始日期年份是当前年份，
且结束日期与开始日期小于一年，则开始日期的年份也不用写。

例如:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) 
应该返回 ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) 
应该返回 ["July 1st, 2016", "July 4th, 2018"].
 */

function parseDate(str) {
  var year = parseInt(str.substr(0, 4));
  var month = parseInt(str.substr(5, 2));
  var day = parseInt(str.substr(8, 2));
  return [year, month, day];
}

var monthMap = {
  1 : "January", 
  2 : "February",
  3 : "March",
  4 : "April",
  5 : "May",
  6 : "June",
  7 : "July",
  8 : "August",
  9 : "September",
  10 : "October",
  11 : "November",
  12 : "December"
};

var dayMap = {
  1 : "1st",
  2 : "2nd",
  3 : "3rd"
};

function parseMonth(month) {
  return monthMap[month];
}

function parseDay(day) {
  if(day <= 3) {
    return dayMap[day];
  } else {
    return day + "th";
  }
}

function makeFriendlyDates(arr) {
  var a = parseDate(arr[0]);
  var b = parseDate(arr[1]);

  var result = [];

  if(a[0] == b[0]) {
    if(a[1] == b[1]) {
      if(a[2] == b[2]) {
        result.push(parseMonth(a[1]) + " " + parseDay(a[2]) + ", " + a[0]);
      } else {
        result.push(parseMonth(a[1]) + " " + parseDay(a[2]));
        result.push(parseDay(b[2])); 
      }
    } else {
      result.push(parseMonth(a[1]) + " " + parseDay(a[2]) + ", " + a[0]);
      result.push(parseMonth(b[1]) + " " + parseDay(b[2]));
    }
  } else {
    if(a[1] > b[1] && b[0] - a[0] == 1) {
      result.push(parseMonth(a[1]) + " " + parseDay(a[2]));
      result.push(parseMonth(b[1]) + " " + parseDay(b[2]));
    } else if(a[1] == b[1] && b[0] - a[0] == 1 && a[2] > b[2]){
      result.push(parseMonth(a[1]) + " " + parseDay(a[2]) + ", " + a[0]);
      result.push(parseMonth(b[1]) + " " + parseDay(b[2]));
    } else {
      result.push(parseMonth(a[1]) + " " + parseDay(a[2]) + ", " + a[0]);
      result.push(parseMonth(b[1]) + " " + parseDay(b[2]) + ", " + b[0]);
    }
  }

  return result;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);