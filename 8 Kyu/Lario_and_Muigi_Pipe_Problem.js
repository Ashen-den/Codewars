function pipeFix(numbers){
  let arrayDiff = Math.max(...numbers)-Math.min(...numbers)
  let arrayMin = Math.min(...numbers)
  let fillArray = []
  for(let i=arrayMin;i<Math.max(...numbers)+1;i++){
    fillArray.push(i)
  }
  console.log(arrayMin,arrayDiff)
  return fillArray
}