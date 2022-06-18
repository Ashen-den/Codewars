function solution(number){
  if(number<=0){
    return 0
  }
  let testArray = Array(number).fill(1).map((e,i)=>e=i+1)
  testArray.pop()
  return testArray.filter(e=> e%3 === 0 || e%5 === 0).reduce((acc,b)=>acc+b,0)
}