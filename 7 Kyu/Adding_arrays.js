function arrAdder(arr) {
  let item = ''
// Find the maximum length of the element in an array to find number of times to iterate
  let maxLength = Math.max.apply(null,arr.map(e=>e.length))
      
  for (let i=0; i<maxLength;i++){
    item += arr.map(e=>e[i]).join('') + (' ')
  }
  return item.trim()
}


// Pattern you need to produce, use a loop to iterate through the index of each element,
// and use map to grab each element to loop through.
// e[0][0] + e[1][0] + e[2][0]
// e[0][1] + e[1][1] + e[2][1]
// e[0][2] + e[1][2] + e[2][2]