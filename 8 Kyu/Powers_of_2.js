function powersOfTwo(n){
  return Array(n+1).fill(2).map((e,i)=>Math.pow(e,i))
}