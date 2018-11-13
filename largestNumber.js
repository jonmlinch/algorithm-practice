//Create an array with the largest number from an array of arrays
function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      let highestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++){
        if (arr[i][j] > highestNumber) {
          highestNumber = arr[i][j]
        }
      }
      newArr[i] = highestNumber;
      console.log(newArr)
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);