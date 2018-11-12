function reverseString(str) {
    let arr = str.split(''); //Creates an array of all letters in the string
    let newArr = []; //Blanks array to hold switched values
    for (let i = arr.length-1; i >= 0; i-- ) { //moves backward through the array
        newArr.push(arr[i])
    }
    return newArr.join(''); //Turns array into a string joined without spaces in between
  }
  
  reverseString("hello");