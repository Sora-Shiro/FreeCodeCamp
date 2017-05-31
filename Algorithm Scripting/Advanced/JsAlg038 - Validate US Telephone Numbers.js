/*
如果传入字符串是一个有效的美国电话号码，则返回 true.

用户可以在表单中填入一个任意有效美国电话号码. 
下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

在本节中你会看见如 800-692-7753 or 8oo-six427676;
laskdjf这样的字符串. 
你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 
区号是必须有的. 如果字符串中给出了国家代码, 
你必须验证其是 1.  如果号码有效就返回 true ; 否则返回 false.
 */

function telephoneCheck(str) {
  var totalNum = 0;
  var includeNum = 0;
  var leftIn = false;
  var rightIn = false;
  var firstNum = '\n';
  var i;
  for(i = 0; totalNum <= 11 && i < str.length; i++) {
    if(str[i] <= '9' && str[i] >= '0') {
      if(totalNum === 0) {
        firstNum = str[i];
      }
      totalNum++;
      if(leftIn && !rightIn) {
        includeNum++;
      }
    } else if(str[i] == '(') {
      if(!leftIn && !rightIn && totalNum <= 1) {
        if(totalNum == 1) {
          if(firstNum == '1') {
            leftIn = true;
          } else {
            return false;
          }
        } else if(totalNum === 0) {
          leftIn = true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if(str[i] == ')') {
      if(leftIn && !rightIn && includeNum == 3) {
        rightIn = true;
      } else {
        return false;
      }
    } else if(str[i] == '-' || str[i] == ' ') {
      if(totalNum === 0) {
        return false;
      } else if(totalNum == 1) {
        if(firstNum != '1') {
            return false;
        }
      }
    } else {
      return false;
    }
  }
  return (totalNum == 10 || (totalNum == 11 && firstNum == '1')) && i == str.length && leftIn == rightIn;
}

telephoneCheck("555-555-5555");
