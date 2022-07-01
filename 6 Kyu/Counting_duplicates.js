function duplicateCount(text){
  let duplicateCount = 0
  let textCount = text
    .split('')
    .map(e=>e.toLowerCase())
    .reduce((acc,b)=>( acc[b] = acc[b] + 1 || 1,acc), {} )
  for(let keys in textCount){
    if(textCount[keys]>1){
    duplicateCount++
    }
  }
  return duplicateCount
}