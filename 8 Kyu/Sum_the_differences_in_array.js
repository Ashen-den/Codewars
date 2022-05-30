function sumOfDifferences(arr) {
  let sum = 0
  let item = arr.sort((a,b)=>b-a)
    for(let i = 0; i<item.length-1; i++){
      sum += item[i]-item[i+1]
    }
  return sum
  }
