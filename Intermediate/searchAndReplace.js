//Perform a search and replace on the sentence using the arguments provided and return the new sentence.


function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()){
      after = after.replace(after[0], after[0].toUpperCase())
    }
    return str.replace(before, after);
  }