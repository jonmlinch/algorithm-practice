//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    let arr = [...str]
    arr.splice(num, str.length, num >= str.length ? "" : "..." )
    console.log(arr.join(''));
    return arr.join('');
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);