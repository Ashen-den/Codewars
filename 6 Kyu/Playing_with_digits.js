function digPow(n, p){
  let arrayN = n.toString().split('').map((e,i)=>Math.pow(Number(e),p+i)).reduce((acc,b)=>acc+b,0)
  let answer = arrayN/n 
  return answer%1 === 0 ? answer : -1
}