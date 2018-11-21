//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let symbols = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '<>': '&lt;&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    let keys = Object.keys(symbols)
    return str.split('').map((x, idx) => 
      keys.includes(x) ? symbols[x] : x
    ).join('')
    
  }
  
  convertHTML("Dolce & Gabbana");