//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    let value = typeof bool == 'boolean' ? true : false;
    return value;
}
  
  booWho(null);