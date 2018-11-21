//Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    if (str.length === 26){
      return undefined
    } else {
      for(let i = 1; i < str.length; i++){
        if (str.charCodeAt(i) - str.charCodeAt(i-1) === 2){
          return String.fromCharCode(str.charCodeAt(i-1) + 1)
        }
      }
    }
    return str;
  }
  
  fearNotLetter("abce");