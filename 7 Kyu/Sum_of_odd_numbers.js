function rowSumOddNumbers(n) {
  let leftNumber = 1
  let array = []
  for(let i = 1;i<=n-1;i++){
    leftNumber += 2*i
  }
  for(let i = 0;i<=n-1;i++){
    array.push(leftNumber+(2*i)) 
  }
  return array.reduce((acc,b)=>acc+b,0)
}