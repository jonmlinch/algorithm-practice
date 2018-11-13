//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    let lowerStr = str.toLowerCase()
    let arr = lowerStr.split(' ')
    for (let i = 0; i < arr.length; i++){
     let stringer = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
     arr[i] = stringer
    }
    return arr.join(' ');
  }
  
  titleCase("I'm a little tea pot");