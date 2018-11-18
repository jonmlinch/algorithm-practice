//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    let merged = arr1.concat(arr2)
    if (arr1.length === 0 || arr2.length === 0){
      newArr = merged
    } else {
      merged.filter((num) => {
        if (!arr1.includes(num)|| !arr2.includes(num)){
          newArr.push(num)
        }
      })
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  //A better solution
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);