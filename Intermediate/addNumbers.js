//Return the sum of two numbers in an array plus the sum of all the numbers between them.

function sumAll(arr) {
    let answer = 0
    if (arr[0] > arr[1]) {
      for (let i = arr[1]; i <= arr[0]; i++){
        answer += i
      }
    } else {
      for (let i = arr[0]; i <= arr[1]; i++){
        answer += i
      }
    }
    return answer
  }
  
  sumAll([1, 4]);