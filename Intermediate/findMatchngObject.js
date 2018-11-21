//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let srcKeys = Object.keys(source)
    arr = collection.filter(obj => {
      return srcKeys.map(item => {
        return (obj.hasOwnProperty(item) && obj[item] === source[item])
      }).reduce((a, b) => a && b)
    }) //Note - the reduce method in this portion turns the array from the map into a statement of either true or false. The filter returns anything that comes back as true.
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });