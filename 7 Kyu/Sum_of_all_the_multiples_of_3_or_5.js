function findSum(n) {
  return Array(n)
          .fill(0)
          .map((e,i)=>i+1)
          .filter(e=> e%3===0 || e%5===0)
          .reduce((acc,b)=>acc+b)
}