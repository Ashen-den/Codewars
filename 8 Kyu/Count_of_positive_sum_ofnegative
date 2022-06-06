function countPositivesSumNegatives(input) {
  let empty = []
  console.log(input, typeof input)
  if(input === null){
    return empty
  }
  if(input.length === 0){
    return empty
  } else {
  return [input.filter(e=>e>0).length, input.filter(e=>e<0).reduce((acc,b)=>acc+b)]
  }
}