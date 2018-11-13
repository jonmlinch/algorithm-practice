//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {
    let newArr = arr.sort((val1, val2) => val1 - val2);
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++){
      if (newArr[i] >= num){
        return i
      } 
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);