//Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
    let prefix = ''
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newStr = str
    if (vowels.includes(str[0])){
      return str + "way"
    } else {
      for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
          return newStr + prefix + "ay"
        } else {
          prefix += str[i]
          console.log(str.slice(i, i+1))
          newStr = newStr.substr(1)
          console.log(newStr)
        }
      }
    }
    return str + 'ay'
  }
  
  translatePigLatin("glove")