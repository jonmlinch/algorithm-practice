//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let newStr = str.replace(/^[A-Z]/, u => u.toLowerCase()).replace(/([A-Z])|(_)/g, " $1").replace(/(\s\s)|(\s)/g, "-")
    console.log(newStr)
    return newStr.toLowerCase() 
    
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("thisIsSpinalTap")

  //Better solution
  function spinalCase(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/(_)|(\s)/g, "-")
    console.log(newStr.toLowerCase())
    return newStr.toLowerCase()
  }