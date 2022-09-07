function alternate(n, firstValue, secondValue){
  let answer = []
  for(let i=0;i<n;i++){
    i%2===0 ? answer.push(firstValue) : answer.push(secondValue)
  }
  return answer
}