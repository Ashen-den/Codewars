function isbnConverter(isbn) {
  let prefix = '978-';
  let isbnMod = isbn.slice(0,-2);
  let checkDigit = 0
  let isbnFinal = prefix.concat(isbnMod).split('-').join('')
  
  isbnMod = prefix.concat(isbnMod).split('-').join('').split('').map(e => parseInt(e,10)).map((e,i) => i%2 === 0 ? e*1 : e*3).reduce((accum, e) => accum +=e, 0)
  isbnMod % 10 === 0 ? checkDigit = 0 : checkDigit = 10-(isbnMod%10)
  
  isbnFinal = isbnFinal.concat(checkDigit).split('').map(e => parseInt(e,10)).join('')
  isbnFinal = `${isbnFinal.slice(0,3)}-${isbn.slice(0,11)}-${isbnFinal.slice(-1)}`
  
  return isbnFinal
}