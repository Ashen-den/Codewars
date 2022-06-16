function digital_root(n) {
  let reducedAnswer = n
  while(reducedAnswer>=10){
    reducedAnswer = (reducedAnswer+'').split('').reduce((acc,b)=>acc+Number(b),0)
  }
  return reducedAnswer
}