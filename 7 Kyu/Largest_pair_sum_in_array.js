function largestPairSum (numbers) {
  return numbers.sort((a,b)=>b-a).filter((e,i)=>i<=1).reduce((a,b)=>a+b,0)
}