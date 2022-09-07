function nbDig(n, d) {
  let arrayHoldingNumber = []
  let squareNumber = 0
  let regexString = new RegExp(`${d}`,'g')
  while (squareNumber*squareNumber <= n*n){
    `${squareNumber*squareNumber}`.includes(d) 
      ? arrayHoldingNumber.push(`${squareNumber*squareNumber}`) 
      : squareNumber
    squareNumber++
  }
  return arrayHoldingNumber
           .map(e=>e.match(regexString).length)
           .reduce((acc,n)=>acc+n)
}