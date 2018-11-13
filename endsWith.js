//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    let tester = str.slice(str.length - target.length, str.length); //returns the last few letters equivalent to the length of target
    if (tester == target){ //if they're the same, returns true or false
      return true
    } else {
      return false
    }
  }
  
  confirmEnding("Bastian", "n");