function splitAndMerge(string, separator) {
  let stringArr = string.split(' ')
  let final = []
   for (let i = 0; i<stringArr.length; i++) {
     final.push(stringArr[i].split('').join(separator))
   }
  return final.join(' ')
}