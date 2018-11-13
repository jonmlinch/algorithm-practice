//You are given two arrays and an index. Use the array methods slice and splice to copy each element of the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
    let front = arr2.slice(0, n)
    let back = arr2.slice(n, arr2.length)
    let newArr = front.concat(...arr1, ...back)
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);