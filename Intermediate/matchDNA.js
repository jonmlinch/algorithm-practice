//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {
    let pairs = {
      'A': 'T',
      'T': 'A',
      'G': 'C',
      'C': 'G'
    }
    let arr = []
    for (let x of str){
      arr.push([x, pairs[x]])
    }
    return arr;
  }
  
  pairElement("GCG");