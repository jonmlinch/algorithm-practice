//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
    let newStr = str
    if (num <= 0){
      return ""
    } else {
      while (num > 1){
        str += newStr
        num--
      }
    }
    return str;
  }
  
  repeatStringNumTimes("abc", 3);