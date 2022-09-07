function positiveSum(arr) {
  return arr.filter(e=>e>0).reduce((acc,b)=>acc+b,0)
}