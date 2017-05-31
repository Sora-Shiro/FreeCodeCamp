/*
设计一个收银程序 checkCashRegister() ，
其把购买价格(price)作为第一个参数 , 
付款金额 (cash)作为第二个参数,
和收银机中零钱 (cid) 作为第三个参数.

cid 是一个二维数组，存着当前可用的找零.

当收银机中的钱不够找零时返回字符串 "Insufficient Funds".
如果正好则返回字符串 "Closed".

否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
 */

var moneyMap = {
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1.0,
  "FIVE" : 5.0,
  "TEN" : 10.0,
  "TWENTY" : 20.0,
  "ONE HUNDRED" : 100.0
};

function beatFloat(num) {
  return parseInt(num * 100 + 0.5) / 100;
}

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var result = [];
    var ifClosed = true;
    for(var i = cid.length-1; i >= 0; i--) {
      var temp = cid.pop();
      if(temp[1] > 0) {
        if(change > moneyMap[temp[0]]) {
          var divide = parseInt(change/moneyMap[temp[0]]);
          var multi = divide * moneyMap[temp[0]];
          if(multi < temp[1]) {
            ifClosed = false;
            change -= multi;
            result.push([temp[0], multi]);
          } else {
            change -= temp[1];
            result.push(temp);
          }
          change = beatFloat(change);
        } else {
          ifClosed = false;
        }
      }
    }
    if(change > 0) {
      return "Insufficient Funds";
    }
    if(ifClosed) {
      return "Closed";
    }
    return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]);

