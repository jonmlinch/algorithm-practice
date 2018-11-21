//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays

function uniteUnique() {
    let newArr = []
    let i = 0
    while (arguments[i]){
      newArr = newArr.concat(arguments[i])
      i++
      console.log(newArr)
    }
    let final = newArr.filter((val,idx) => newArr.indexOf(val) == idx)
    //the filter compares the first index of whatever val is and if it doesnt match the current index it id filtered out
    return final;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);