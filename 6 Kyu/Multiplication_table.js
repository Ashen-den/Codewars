multiplicationTable = function(size) {
  const arrayTable = [...Array(size).keys()].map(e=>e+1)
  const finalArray = []
  for(let i=1; i<=size ;i++){
    finalArray.push(arrayTable.map(e=>e*i))
  }
  return finalArray
}