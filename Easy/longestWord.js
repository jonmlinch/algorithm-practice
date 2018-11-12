//Find the longest work in a string
function findLongestWordLength(str) {
    let longestWord = 0; //sets counting variable
    let arr = str.split(' '); //turns string into an array with each word as an item
    for (let i = 0; i < arr.length; i++){ //for loop moves trhough array
      if (arr[i].length > longestWord){ //checks if word is longer than current value of longestWord
        longestWord = arr[i].length; //if it is, sets longestWord to that number
      }
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");